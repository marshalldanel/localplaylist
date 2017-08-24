const path = require('path');
const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

const config = {
  entry: {
    app: [
      path.resolve(__dirname, 'app/src/index.jsx'),
    ],
  },
  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name]-bundle-generated.js',
  },
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: ENV === 'production' ? 'cheap-source-map' : 'eval-source-map',
  // https://webpack.js.org/configuration/dev-server/
  module: {
    rules: [
      // https://webpack.js.org/loaders/babel-loader/
      {
        test: /\.(js|jsx)?$/,
        include: [
          path.resolve(__dirname, 'app'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            ignore: '/node_modules/',
          },
        },
      },
      // https://webpack.js.org/loaders/sass-loader/
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|mp4|ogv|webm)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: '/',
          outputPath: 'assets/',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'app/index.html'),
      inject: true,
    }),
  ],
};

if (ENV === 'development') {
  config.entry.app.unshift('webpack-hot-middleware/client');
}

module.exports = config;

// copy webpack plugin
