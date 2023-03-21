module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "no-tabs": 0,
    "indent": 0,
    "import/extensions": 0,
    "no-unused-vars": 0,
    "eol-last": 0,
    "linebreak-style": 0
  },
};
