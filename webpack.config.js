const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
  name: 'client',
  entry: ['client.js'],
  output: {
    path: path.join(__dirname, 'built/'),
    filename: 'client.js',
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
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')],
  resolve: {
    root: __dirname
  }
};

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    './serverEntry.js'
  ],
  output: {
    path: path.join(__dirname, 'built/'),
    filename: 'server.js',
    publicPath: 'built/',
    libraryTarget: 'commonjs2'
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
        loader: 'null'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  resolve: {
    root: __dirname
  }
};

module.exports = [config, serverConfig];
