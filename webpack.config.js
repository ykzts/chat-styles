const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const SubresourceIntegrityPlugin = require('webpack-subresource-integrity');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env !== 'production' ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /\/node_modules\//,
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          name: env !== 'production' ? '[name].[ext]?[hash]' : '[name].[hash].[ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  output: {
    crossOriginLoading: 'anonymous',
    filename: env !== 'production' ? '[name].js?[hash]' : '[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    ...(env === 'production' ? [
      new CopyPlugin([
        path.resolve(__dirname, 'public', '_headers'),
      ]),
      new SubresourceIntegrityPlugin({
        hashFuncNames: ['sha512'],
      }),
    ] : []),
    new HtmlPlugin({
      inject: false,
      template: path.resolve(__dirname, 'src', 'templates'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  serve: {
    content: path.resolve(__dirname, 'public'),
  },
};
