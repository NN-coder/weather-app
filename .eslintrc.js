module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/airbnb',
    'plugin:vue-a11y/base',
    "plugin:vue-types/recommended",
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    '@vue/prettier',
  ],
  plugins: ['vue-a11y', 'promise', 'sonarjs'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "import/prefer-default-export": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
