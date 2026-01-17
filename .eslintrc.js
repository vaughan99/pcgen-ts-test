module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svelte', '.css'],
      },
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    // See https://www.npmjs.com/package/eslint-plugin-prettier/
    'plugin:prettier/recommended',
    'plugin:svelte/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    BigInt: true,
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'svelte'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],
    'no-unused-vars': 'off', // covered by @typescript-eslint/no-unused-vars
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./'] }],
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'max-len': ['error', { code: 120 }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: {
          minProperties: 6,
          consistent: false,
          multiline: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      // The parser options will apply to the content inside <script> and <template> tags
      parserOptions: {
        parser: '@typescript-eslint/parser', // Use TypeScript parser if you have TypeScript
        // Add extra file extensions for TypeScript to function correctly
        extraFileExtensions: ['.svelte'],
        // If using a specific tsconfig.json, uncomment and set the project path:
        // project: 'path/to/your/tsconfig.json'
      },
    },
  ],
};
