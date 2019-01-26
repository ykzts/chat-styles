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
    'react/default-props-match-prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
