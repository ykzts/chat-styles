module.exports = (api) => {
  const env = api.env();

  return {
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      env === 'test' && '@babel/transform-modules-commonjs',
      env === 'production' && '@babel/transform-react-inline-elements',
    ].filter(Boolean),
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
};
