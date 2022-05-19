module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^(\\w|@)'],
          ['^@mui'],
          ['^common'],
          ['^services'],
          ['^\\.'],
          ['\\.scss$'],
          ['^\\./styled$'],
        ],
      },
    ],
  },
};
