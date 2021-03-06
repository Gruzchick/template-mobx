module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'max-empty-lines': 1,
    'no-empty-source': null,
    'value-keyword-case': null,
  },
};
