/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        commonjs: false,
        es2020: false
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      env: {
        commonjs: true
      },
      files: ['next.config.js', 'prettier.config.js'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  root: true,
  rules: {
    // 'import/order': [
    //  'error',
    //  {
    //  alphabetize: {
    //   order: 'asc'
    //  },
    //  groups: [
    //     ['builtin', 'external'],
    //      'internal',
    //      'parent',
    //      'sibling',
    //      'index'
    //    ]
    //   }
    // ],
    // 'sort-keys': 'error'
  }
}
