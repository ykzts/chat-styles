const globals = require('globals')
const js = require('@eslint/js')
const prettier = require('eslint-config-prettier')
const prettierPlugin = require('eslint-plugin-prettier')

module.exports = [
  js.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error'
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        JSX: 'readonly',
        React: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    rules: {
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ]
    }
  },
  {
    files: ['next.config.js', 'prettier.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.node
      },
      sourceType: 'commonjs'
    }
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', '.git/**']
  }
]
