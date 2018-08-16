const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';

module.exports = {
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/proposal-pipeline-operator', { proposal: 'minimal' }],
    ...(env === 'test' ? [
      '@babel/transform-modules-commonjs',
    ] : []),
    ...(env === 'production' ? [
      '@babel/transform-react-inline-elements',
    ] : []),
  ],
  presets: [
    '@babel/flow',
    [
      '@babel/react',
      {
        development: env !== 'production',
        useBuiltIns: true,
      },
    ],
  ],
};
