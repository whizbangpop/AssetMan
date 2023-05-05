module.exports = {
  extends: [
    'semistandard'
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "always"]
  },
  env: {
    "browser": false,
    "es6": true,
    "node": true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
};
