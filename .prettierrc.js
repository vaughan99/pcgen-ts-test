export default {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [
    'prettier-plugin-jsdoc',
    'prettier-plugin-svelte',
    // 'prettier-plugin-tailwindcss',
  ],
  overrides:  [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
};
