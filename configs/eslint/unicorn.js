module.exports = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: false,
          env: false,
        }
      },
    ],
  },
};
