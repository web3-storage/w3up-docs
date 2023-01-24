// Before building the docs site, we need to collect API reference docs for our JS packages.
// Each package has a `docs:markdown` npm script that generates docusaurus-flavored markdown
// from typedoc output.
//

const path = require('node:path')
const fs = require('node:fs')
const { promisify } = require('node:util')
const exec = promisify(require('node:child_process').exec)
const { mkdirp } = require('mkdirp')
const rimraf = require('rimraf')
const copy = require('recursive-copy')
const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')

const REPO_ROOT = path.resolve(__dirname, '..')
const WORKDIR = path.join(REPO_ROOT, '.prebuild')

/** 
 * @typedef {object} RepoInfo
 * @property {string} url
 * @property {string} ref
 * @property {string[]} buildCommands
 * @property {string} docsOutput
 * 
 * @type {Record<string, RepoInfo>}
 */
const REPOS = {
  w3protocol: {
    url: 'https://github.com/web3-storage/w3protocol',
    ref: 'main',
    buildCommands: ['pnpm install', 'pnpm run docs:markdown'],
    docsOutput: 'docs/markdown',
    siteDestination: 'docs/api/w3protocol'
  },
  // TODO: enable once w3up-client has a docs:generate command
  // 'w3up-client': {
  //   url: 'https://github.com/web3-storage/w3up-client',
  //   ref: 'main',
  // }
}

/**
 * @param {RepoInfo} repo 
 * @param {string} dest
 */
async function cloneRepo(repo, dest) {
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

async function generateDocs(repo, checkoutDir) {
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
}

async function main() {
  await mkdirp(WORKDIR)  
  for (const [name, repo] of Object.entries(REPOS)) {
    const dir = path.join(WORKDIR, name)
    await rimraf(dir)
    await cloneRepo(repo, dir)
    await generateDocs(repo, dir)
  
    // copy generated docs into site source tree
    const src = path.join(dir, repo.docsOutput)
    const dest = path.join(REPO_ROOT, repo.siteDestination)
    await rimraf(dest)
    await copy(src, dest)
  }
}


main()