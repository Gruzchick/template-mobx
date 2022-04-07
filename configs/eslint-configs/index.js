module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './eslint',
    './import',
    './typescript',
    './react',
    './react-hooks',
    './compat',
    './sonarjs',
    './unicorn',
    './jest',
    './testing-library',
    './jsdoc',
    './simple-import-sort',
    './prettier', // prettier should be last in "extends" list
  ],
};
