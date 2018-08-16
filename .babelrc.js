const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';

module.exports = {
  plugins: [
    ...(env === 'test' ? [
      '@babel/transform-modules-commonjs',
    ] : []),
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/proposal-pipeline-operator', { proposal: 'minimal' }],
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
