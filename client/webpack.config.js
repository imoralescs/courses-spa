const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const removeEmpty = x => x.filter(y => !!y);

module.exports = {
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js']
  },
  entry: removeEmpty([
    'babel-polyfill',

    // Only load these entry point for non-production mode
    process.env.NODE_ENV !== 'production'
      ? 'react-hot-loader/patch'
      : undefined,
    process.env.NODE_ENV !== 'production'
      ? 'webpack/hot/only-dev-server'
      : undefined,

    // Switch between a production and non-production entry point
    process.env.NODE_ENV === 'production'
     ? './index.prod.js'
     : './index.dev.js',
  ]),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: removeEmpty([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    process.env.NODE_ENV !== 'production' ? new HtmlWebpackPlugin({
      title: 'My App',
      template: path.join(__dirname, 'src', 'index.html'),
    }) : undefined,
    process.env.NODE_ENV !== 'production' ? new webpack.NamedModulesPlugin() : undefined,
    process.env.NODE_ENV !== 'production' ? new webpack.NoEmitOnErrorsPlugin() : undefined,
  ])
};
