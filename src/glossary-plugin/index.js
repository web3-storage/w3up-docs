const path = require('node:path')
const fs = require('node:fs/promises')
const yaml = require('yaml')

const DEFAULT_TERM_FILEPATH = 'docs/glossary.yml'

module.exports = async (context, options) => {
  // TODO: allow overriding via plugin options
  const termsFilePath = path.join(context.siteDir, DEFAULT_TERM_FILEPATH)

  return {
    name: 'w3up-glossary-plugin',

    async loadContent () {
      try {
        const termsYaml = await fs.readFile(termsFilePath, { encoding: 'utf-8' })
        const rawTerms = yaml.parse(termsYaml)

        // the 'details' field of each term is only used on the glossary page, so we
        // remove it to minimize the size of the global data injected by the plugin
        const terms = rawTerms.map((term) => ({ ...term, details: undefined }))

        return { terms }
      } catch (e) {
        console.error(`glossary plugin: error parsing term definitions from ${termsFilePath}: ${e.message}`)
        throw e
      }
    },

    async contentLoaded ({ content, actions }) {
      const { setGlobalData } = actions
      setGlobalData(content)
    }
  }
}
