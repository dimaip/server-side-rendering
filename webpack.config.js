const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ['index.js'],
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
      }
    ]
  },
  resolve: {
    root: __dirname
  }
};

module.exports = config;
