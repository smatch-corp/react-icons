// eslint-disable-next-line @typescript-eslint/no-var-requires
const { typescript, ...restDprintOptions } = require('./dprint.json');

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
      restDprintOptions,
      { typescript },
    ],
  },
};
