module.exports = {
  extends: ['plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-fragments': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/display-name': 'off',
  },
};
