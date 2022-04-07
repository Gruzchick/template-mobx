module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w'],
          ['^(Common|Assets|Store|Pages|Router)'],
          ['^'],
          ['^\\.'],
          ['\\.scss$'],
        ],
      },
    ],
  },
};
