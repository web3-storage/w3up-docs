// utility script to remove any files in the working dir that are
// ignored by git. Requires `git` >= 1.7.6 on your $PATH.
//
// Motivation: we want to ignore most of the contents of docs/api/w3protocol and
// other generated docs, except for a few "overrides" like the _category_.yml
// file, which are whitelisted in the .gitignore file.
//
// This script lets you delete everything that wouldn't be present in a clean checkout,
// so you don't need to keep track of what to keep and what to remove manually if you
// want to regenerate the docs.

const path = require('node:path')
const { promisify } = require('node:util')
const fs = require('node:fs/promises')
const exec = promisify(require('node:child_process').exec)

async function getIgnoredPaths () {
  const { stdout } = await exec('git status -s --ignored')
  const paths = stdout.split(/\r?\n/)
    .filter(s => s.startsWith('!! '))
    .map(s => s.replace('!! ', ''))
  return paths
}

async function main () {
  const repoRoot = path.resolve(__dirname, '..')
  process.chdir(repoRoot)

  const paths = await getIgnoredPaths()
  if (paths.length === 0) {
    return
  }

  console.log('removing files ignored by git:')
  for (const p of paths) {
    console.log(p)
    const fullPath = path.join(repoRoot, p)
    await fs.rm(fullPath, { recursive: true })
  }
}

main()
