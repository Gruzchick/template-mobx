module.exports = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          ref: false,
          prop: false,
          props: false,
          env: false,
          arg: false,
          args: false,
        },
      },
    ],
  },
};
