/* eslint-env node */
module.exports = {
  extends: [
    'plugin:perfectionist/recommended-natural',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'dprint-integration'],
  root: true,
  rules: {
    'dprint-integration/dprint': [
      'error',
      // Global Config (will pass to the dprint formatter directly): Available at https://dprint.dev/config/
      {
        lineWidth: 120,
      },
      // Plugin Specific Config (will pass to the dprint plugins): Available at https://dprint.dev/plugins/
      {
        typescript: {
          'importDeclaration.sortNamedImports': 'maintain',
          'indentWidth': 2,
          'jsx.quoteStyle': 'preferDouble',
          'module.sortImportDeclarations': 'maintain',
          'quoteStyle': 'preferSingle',
        },
      },
    ],
  },
};
