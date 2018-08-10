module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb',
  globals: {
    IntervalID: true,
    SyntheticEvent: true,
  },
  parser: 'babel-eslint',
  root: true,
  rules: {
    'react/require-default-props': 'off',
  },
};
