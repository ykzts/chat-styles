const history = require('connect-history-api-fallback');
const HtmlPlugin = require('html-webpack-plugin');
const convert = require('koa-connect');
const path = require('path');

const env = process.env.NODE_ENV || 'production';

module.exports = {
  mode: env !== 'production' ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /\/node_modules\//,
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: env !== 'production' ? '[name].js?[hash]' : '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlPlugin({
      inject: false,
      template: path.resolve(__dirname, 'src', 'templates'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  serve: {
    add(app) {
      app.use(convert(history()));
    },
  },
};
