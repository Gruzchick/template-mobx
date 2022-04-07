module.exports = {
  extends: ['plugin:import/recommended'],
  rules: {
    'import/no-unresolved': 'off', // It's enough that webpack reports unresolved imports
    'import/order': 'off', // sorting is done by a plugin "simple-import-sort"
  },
};
