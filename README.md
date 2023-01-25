# w3up-docs

> Documentation website for the w3up storage APIs provided by web3.storage.

This repo contains a [Docusaurus](https://docusaurus.io) project that builds the documentation site for w3up, the [UCAN](https://ucan.xyz)-based storage platform offered by web3.storage.

### Installation

You'll need Node v18+ to build this project.

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### API doc generation

The prebuild hook runs a script at [`scripts/api-docs.js`](./scripts/api-docs.js) that clones the repos containing our user-facing JS libraries and generates Docusaurus-flavored markdown using [docusarus-plugin-typedoc](https://www.npmjs.com/package/docusaurus-plugin-typedoc). The generated markdown is then copied into `docs/api` to be picked up by the main build process.

In order to tweak the generated output a bit to better suit the docs site, any files in the destination directory that are not ignored by the `.gitignore` file will be preserved, so that the copy in this repo is used instead of the generated one. This is used to override the `_category_.yml` files that control the sidebar, as well as replace the generated `index.md`, which uses the README of the cloned repo and often contains info that makes sense when viewing the repo on GitHub but doesn't fit on the docs site.

#### Glossary generation

The glossary page is generated from [`docs/glossary.yml`](docs/glossary.yml) using the [`scripts/glossary-page.js` script](./scripts/glossary-page.js). The script runs automatically before build and generates `docs/glossary.md`, which is ignored by git.

When using the dev server (`npm run start`), the script watches `glossary.yml` for changes and will re-generate the markdown file when you save.

The yaml file is an array of "term objects", where each object has the following fields (all of type `string`): 

| field | required? | description |
|-|-|-|
| `id` | ✔️ | A short id, e.g. `cid` |
| `definition` | ✔ | A concise definition of the term, displayed in a tooltip when hovering over `<Term>` component |
| `name` | | The term being defined. If omitted, defaults to `id` with the first letter capitalized. |
| `details` | | Additional details to include in the glossary page (but not in tooltips) |

Here's an example definition:

```yaml
- id: agent
  name: Agent
  definition: A software component that manages signing keys and delegations needed to invoke w3up APIs.
  details: |
    Agents are used to invoke capabilities provided by the w3up service layer, using the [ucanto](https://github.com/web3-storage/ucanto) RPC framework. 
    
    Agents are created locally on an end-user's device, and users are encouraged to create new agents for each device (or browser) that they want to use, rather than sharing agent keys between devices.
```

The `details` field can contain markdown / MDX, which will be rendered on the glossary page. You can use the `<Term>` component described below inside of `details` to link to other terms.

In addition to generating the glossary page, the `glossary.yml` file provides definitions for a `<Term>` component that you
can use in your docs:


```markdown
Not everybody knows what a <Term id="cid">CID</Term> is, but they can hover over the Term to find out!
```

This will render a link that displays a tooltip with the `definition` on hover and takes you to the full definition (including `details`) on the glossary page when clicked.

The `Term` component is available in the global scope, so there's no need to add MDX import statements to your docs in order to use it.

### Deployment

The site is built with Netlify via their GitHub app integration. Production deployments happen on commit / merge to the `main` branch.