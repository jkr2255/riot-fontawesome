'use strict';

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src/entry.js"),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
    library: 'RiotFontAwesome',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|tag)$/,
        use: 'babel-loader'
      },
      {
        test: /\.tag$/,
        use: 'riot-tag-loader'
      }
    ]
  },
  externals: {
    '@fortawesome/fontawesome': {
      commonjs: '@fortawesome/fontawesome',
      commonjs2: '@fortawesome/fontawesome',
      amd: '@fortawesome/fontawesome',
      root: 'FontAwesome'
    },
    riot: 'riot'
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
