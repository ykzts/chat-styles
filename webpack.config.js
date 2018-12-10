const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const SubresourceIntegrityPlugin = require('webpack-subresource-integrity');
const WorkboxPlugin = require('workbox-webpack-plugin');

const FAVICON_SIZES = [48, 72, 96, 144, 168, 192];

const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env !== 'production' ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /\/node_modules\//,
        loader: 'babel-loader',
        test: /\.jsx?$/,
      },
      {
        test: /(?<!\/preview)\.css$/,
        use: [
          'style-loader/useable',
          'css-loader',
        ],
      },
      {
        loader: 'raw-loader',
        test: /\/preview\.css$/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: env !== 'production' ? '[name].[ext]?[hash]' : '[name].[hash].[ext]',
            },
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              conservativeCollapse: false,
              interpolate: true,
              minifyCSS: false,
              minimize: true,
            },
          },
        ],
      },
      {
        loader: 'file-loader',
        options: {
          name: env !== 'production' ? '[name].[ext]?[hash]' : '[name].[hash].[ext]',
          outputPath: './images/',
          publicPath: '/images/',
        },
        test: /\.png$/,
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
    new EnvironmentPlugin({
      BASE_URL: process.env.URL || 'https://example.com',
      NODE_ENV: env,
    }),
    new HtmlPlugin({
      inject: false,
      minify: {
        caseSensitive: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeAttributeQuotes: true,
        removeComments: true,
        sortAttributes: true,
        sortClassName: true,
      },
      template: path.resolve(__dirname, 'src', 'templates'),
    }),
    ...(env === 'production' ? [
      new CopyPlugin([
        path.resolve(__dirname, 'public', '_headers'),
        path.resolve(__dirname, 'public', 'manifest.json'),
        path.resolve(__dirname, 'public', 'favicon.ico'),
        ...FAVICON_SIZES.map(size => path.resolve(__dirname, 'public', `favicon-${size}x${size}.png`)),
        path.resolve(__dirname, 'public', 'apple-touch-icon.png'),
      ]),
      new SubresourceIntegrityPlugin({
        hashFuncNames: ['sha512'],
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        exclude: [
          /\.map$/,
          /^_headers$/,
          /^favicon-\d+x\d+\.png$/,
          /^apple-touch-icon\.png$/,
        ],
        importWorkboxFrom: 'local',
        runtimeCaching: [
          {
            handler: 'staleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
            urlPattern: /^\/(?:favicon-\d+x\d+|apple-touch-icon)\.png$/,
          },
          {
            handler: 'staleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
            urlPattern: /^https:\/\/(?:fonts\.googleapis\.com|fonts\.gstatic\.com)\//i,
          },
        ],
        skipWaiting: true,
        swDest: 'sw.js',
      }),
    ] : []),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  serve: {
    content: path.resolve(__dirname, 'public'),
  },
};
