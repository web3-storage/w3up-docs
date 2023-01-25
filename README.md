w3up-docs

Documentation website for the w3up storage APIs provided by web3.storage.

This repo contains a [Docusaurus](https://docusaurus.io) project that builds the documentation site for w3up, the [UCAN](https://ucan.xyz)-based storage platform offered by web3.storage.

Installation

You'll need Node v18+ to build this project.

```
$ npm install
```

Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

API doc generation

The prebuild hook runs a script at [`scripts/pre-build.js`](./scripts/pre-build.js) that clones the repos containing our user-facing JS libraries and generates Docusaurus-flavored markdown using [docusarus-plugin-typedoc](https://www.npmjs.com/package/docusaurus-plugin-typedoc). The generated markdown is then copied into `docs/api` to be picked up by the main build process.

In order to tweak the generated output a bit to better suit the docs site, any files in the destination directory that are not ignored by the `.gitignore` file will be preserved, so that the copy in this repo is used instead of the generated one. This is used to override the `_category_.yml` files that control the sidebar, as well as replace the generated `index.md`, which uses the README of the cloned repo and often contains info that makes sense when viewing the repo on GitHub but doesn't fit on the docs site.

Deployment

The site is built with Netlify via their GitHub app integration. Production deployments happen on commit / merge to the `main` branch.
