module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['standard', 'plugin:mdx/recommended'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    extensions: ['mdx', 'md'],
    sourceType: 'module'
  },
  ignorePatterns: [
    'docs/api/**/*',
    '!docs/api/w3up-client/index.md'
  ],
  rules: {
  },
  settings: {
    'mdx/code-blocks': true
  }
}
