var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;
bourbon = bourbon.concat(neat);

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
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap&includePaths[]=" + bourbon + neat[0] + '&includePaths[]=' + neat[1]]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]',
            }
          }
        ]
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
