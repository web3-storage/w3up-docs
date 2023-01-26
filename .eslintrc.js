module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    // 'plugin:mdx/recommended',
  ],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      extends: 'plugin:mdx/recommended',
    },
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      extends: 'standard-with-typescript',
    }
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    extensions: ['mdx', 'md'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  ignorePatterns: [
    'docs/api/**/*',
    '!docs/api/w3up-client/index.md'
  ],
  rules: {
  },
  settings: {
    'mdx/code-blocks': true,
  }
}
