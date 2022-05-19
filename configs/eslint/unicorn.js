module.exports = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          ref: false,
          prop: false,
          props: false,
          env: false,
        }
      },
    ],
  },
};
