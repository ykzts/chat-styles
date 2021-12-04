/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        commonjs: false
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
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@next/next/no-page-custom-font': 'off'
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
