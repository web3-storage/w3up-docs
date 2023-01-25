// Before building the docs site, we need to collect API reference docs for our JS packages.
// Each package has a `docs:markdown` npm script that generates docusaurus-flavored markdown
// from typedoc output.
//

const path = require('node:path')
const fs = require('node:fs')
const { promisify } = require('node:util')
const exec = promisify(require('node:child_process').exec)
const { mkdirp } = require('mkdirp')
const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')

const DOCS_REPO_ROOT = path.resolve(__dirname, '..')
const WORKDIR = path.join(DOCS_REPO_ROOT, '.prebuild')

/**
 * @typedef {object} Postprocessing
 * @property {string} [renameIndexModule] if present, rename modules/index.md to the field value, to avoid docusaurus treating it as a directory index page
 *
 * @typedef {object} RepoInfo
 * @property {string} url repo url to clone
 * @property {string} ref branch / tag to checkout
 * @property {string[]} buildCommands list of shell commands to run to install deps & build markdown docs
 * @property {string} docsOutput path relative to cloned repo containing markdown output
 * @property {string} siteDestination path relative to _this_ repo where we should put the generated docs
 * @property {Postprocessing} [postprocess] optional post-processing to apply to generated docs
 *
 * @type {Record<string, RepoInfo>}
 */
const REPOS = {
  'w3up-client': {
    url: 'https://github.com/web3-storage/w3up-client',
    ref: 'docs/generate-docusaurus-markdown',
    buildCommands: ['npm install', 'npm run docs:markdown'],
    docsOutput: 'docs/markdown',
    siteDestination: 'docs/api/w3up-client',
    postprocess: {
      renameIndexModule: 'package.md'
    }
  },
  w3protocol: {
    url: 'https://github.com/web3-storage/w3protocol',
    ref: 'main',
    buildCommands: ['pnpm install', 'pnpm run docs:markdown'],
    docsOutput: 'docs/markdown',
    siteDestination: 'docs/api/w3protocol'
  }
}

/**
 * @param {RepoInfo} repo
 * @param {string} dest
 */
async function cloneRepo (repo, dest) {
  console.log(`cloning ${repo.url} @ ${repo.ref} to ${dest}`)
  await git.clone({
    fs,
    http,
    dir: dest,
    url: repo.url,
    ref: repo.ref,
    singleBranch: true,
    depth: 1
  })
  console.log(`clone of ${repo.url} complete`)
}

async function generateDocs (repo, checkoutDir) {
  const pwd = process.cwd()

  for (const cmd of repo.buildCommands) {
    console.log('running build command:', cmd)
    try {
      process.chdir(checkoutDir)
      await exec(cmd)
    } catch (e) {
      console.error(`error running build command ${cmd}: ${e.message}`)
      console.error(e.stderr)
      process.exit(1)
    } finally {
      process.chdir(pwd)
    }
  }

  await postprocessDocsOutput(repo, checkoutDir)
}

async function postprocessDocsOutput (repo, checkoutDir) {
  if (!repo.postprocess) {
    return
  }
  const { renameIndexModule } = repo.postprocess

  if (renameIndexModule) {
    const src = path.join(checkoutDir, repo.docsOutput, 'modules', 'index.md')
    const dest = path.join(checkoutDir, repo.docsOutput, 'modules', renameIndexModule)
    console.log(`renaming ${src} to ${dest}`)
    await fs.promises.rename(src, dest)
  }
}

async function copyDocsToSiteDestination (repo, checkoutDir) {
  const src = path.join(checkoutDir, repo.docsOutput)
  const dest = path.join(DOCS_REPO_ROOT, repo.siteDestination)

  await fs.promises.cp(src, dest, {
    recursive: true,
    force: true,
    filter: async (filePath, destPath) => {
      // always copy directories over
      const stats = await fs.promises.stat(filePath)
      if (stats.isDirectory()) {
        return true
      }

      // if the destination file is _not_ ignored by git, don't overwrite it
      const destRelative = path.relative(DOCS_REPO_ROOT, destPath)
      const ignored = await git.isIgnored({
        fs,
        dir: DOCS_REPO_ROOT,
        filepath: destRelative
      })
      return ignored
    }
  })
}

async function main () {
  const clean = process.argv.some(arg => arg === '--clean')

  await mkdirp(WORKDIR)
  for (const [name, repo] of Object.entries(REPOS)) {
    const dir = path.join(WORKDIR, name)
    const mdSrc = path.join(dir, repo.docsOutput)

    // If the generated docs already exist and the --clean flag is not present,
    // just copy them over and move on instead of re-cloning and rebuilding.
    // This makes local development of the docs repo with `npm run start`
    // much nicer. Production builds run with --clean and always rebuild.
    if (fs.existsSync(mdSrc) && !clean) {
      console.warn(`using existing generated docs at ${mdSrc}. Run this script with --clean to force rebuild.`)
      await copyDocsToSiteDestination(repo, dir)
      continue
    }

    // remove any existing clone and re-clone the repo, then generate the docs and copy into the site
    await fs.promises.rm(dir, { recursive: true, force: true })
    await cloneRepo(repo, dir)
    await generateDocs(repo, dir)
    await copyDocsToSiteDestination(repo, dir)
  }
}

main()
