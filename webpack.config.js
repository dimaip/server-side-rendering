const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: ['client.js'],
  output: {
    path: path.join(__dirname, 'built/'),
    filename: 'index.js',
    publicPath: '/built/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')],
  resolve: {
    root: __dirname
  }
};

module.exports = config;
