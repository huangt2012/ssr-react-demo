const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // 服务端
  target: 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: path.resolve(__dirname, '../src/server.js'),
  output: {
    filename: 'bundle_server.js',
    path: path.resolve(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },

  // 排除第三方包
  externals: [webpackNodeExternals()]
}