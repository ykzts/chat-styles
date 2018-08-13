module.exports = {
  plugins: [
    '@babel/proposal-class-properties',
    ['@babel/proposal-object-rest-spread', { useBuiltIns: true }],
    ['@babel/proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
  presets: [
    '@babel/react',
  ],
};
