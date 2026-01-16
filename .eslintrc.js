module.exports = {
settings: {
'import/resolver': {
node: {
extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
plugins: ['@typescript-eslint', 'jest', 'prettier'],
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
};