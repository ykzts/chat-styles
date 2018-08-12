module.exports = {
  plugins: [
    '@babel/proposal-class-properties',
    ['@babel/proposal-object-rest-spread', { useBuiltIns: true }],
  ],
  presets: [
    '@babel/react',
  ],
};
