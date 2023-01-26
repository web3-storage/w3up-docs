module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      extends: 'plugin:mdx/recommended'
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: 'standard-with-typescript'
    },
    {
      files: ['*.js', '*.jsx'],
      extends: 'standard',
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off'
      }
    }
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    extensions: ['mdx', 'md'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
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
