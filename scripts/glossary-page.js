// generates a markdown file at docs/glossary.md from the contents of docs/glossary.yml

const fs = require('node:fs/promises')
const path = require('node:path')
const yaml = require('yaml')
const { stripIndents } = require('common-tags')

const DOCS_REPO_ROOT = path.resolve(__dirname, '..')
const GLOSSARY_YAML_PATH = path.join(DOCS_REPO_ROOT, 'docs/glossary.yml')
const GLOSSARY_MD_PATH = path.join(DOCS_REPO_ROOT, 'docs/glossary.md')

const GLOSSARY_META = {
  id: 'glossary',
  title: 'Glossary'
}

async function loadGlossary () {
  const content = await fs.readFile(GLOSSARY_YAML_PATH, { encoding: 'utf-8' })
  return yaml.parse(content)
}

function capitalize (s) {
  return [s.charAt(0).toUpperCase(), s.slice(1)].join('')
}

function generateMarkdown (terms, frontmatter = GLOSSARY_META) {
  const frontmatterYaml = '---\n' + yaml.stringify(frontmatter) + '---'
  const blocks = []

  // sort by term id
  terms.sort((a, b) => a.id < b.id ? -1 : 0)

  for (const term of terms) {
    if (!('id' in term)) {
      console.warn('invalid term definition: missing "id" field. Will be omitted from glossary:', term)
      continue
    }
    if (!('definition' in term)) {
      console.warn('invalid term definition: missing "definition" field. Will be omitted from glossary:', term)
      continue
    }

    const { id, name, definition, details } = term
    const termName = name || capitalize(id)
    const detailText = details || ''
    const s = stripIndents`
    ### ${termName}

    > ${definition}

    ${detailText}
    `
    blocks.push(s)
  }

  return [frontmatterYaml, ...blocks].join('\n\n')
}

async function generate () {
  try {
    const terms = await loadGlossary()
    const md = await generateMarkdown(terms)

    console.log(`writing glossary to ${GLOSSARY_MD_PATH}`)
    await fs.writeFile(GLOSSARY_MD_PATH, md, { encoding: 'utf-8' })
  } catch (e) {
    console.error('error generating glossary: ', e)
  }
}

async function main () {
  const watch = process.argv.some((arg) => arg === '--watch')

  await generate()

  if (watch) {
    console.log('watching glossary file for changes:', GLOSSARY_YAML_PATH)
    const watcher = fs.watch(GLOSSARY_YAML_PATH)
    for await (const { eventType } of watcher) {
      if (eventType !== 'change') {
        continue
      }
      console.log('change to glossary.yml detected, regenerating markdown')
      await generate()
    }
  }
}

main()
