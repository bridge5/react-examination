module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier/react',
  ], 
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'func-names': ['error', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  settings: {},
  globals: {},
};
