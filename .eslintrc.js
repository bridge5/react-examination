module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/extensions': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    /* 确定不会发生改变的规则 */
    'react/jsx-props-no-spreading': 0, // 允许 jsx 属性使用扩展运算符
    'react/prop-types': 0, // 不需要使用 prop-types 检查组件 props
    'import/prefer-default-export': 0, // 不需要优先使用默认导出
    'import/no-unresolved': 0,
    'react/no-array-index-key': 0,
    /* 可能会改变的规则 */
    'react/react-in-jsx-scope': 0, // 使用 jsx 的组件无需引入 React
    // 移动端大部分不需要键盘事件
    'jsx-a11y/click-events-have-key-events': 0,
    // 无障碍暂时用不到
    'jsx-a11y/no-static-element-interactions': 0,
    // 后台返回的字段不是驼峰的
    camelcase: 0,
    // 这个限制太片面了，https://github.com/eslint/eslint/issues/10482
    'no-restricted-properties': 0,
    // 全局方法无法使用
    'no-restricted-globals': 0,
  },
};
