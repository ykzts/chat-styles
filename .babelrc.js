module.exports = {
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
  presets: [
    '@babel/flow',
    ['@babel/react', { useBuiltIns: true }],
  ],
};
