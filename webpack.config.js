const history = require('connect-history-api-fallback');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const convert = require('koa-connect');
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
    new CopyPlugin([
      path.resolve(__dirname, 'src', 'files', '_headers'),
    ]),
    new SubresourceIntegrityPlugin({
      enabled: env === 'production',
      hashFuncNames: ['sha512'],
    }),
    new HtmlPlugin({
      inject: false,
      template: path.resolve(__dirname, 'src', 'templates'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  serve: {
    add: app => app.use(convert(history())),
  },
};
