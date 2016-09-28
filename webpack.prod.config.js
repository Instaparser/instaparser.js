require('extract-text-webpack-plugin');
const webpack = require('webpack');
const webpackSettings = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const optimizingPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.OccurrenceOrderPlugin,
  new webpack.optimize.UglifyJsPlugin,
  new HtmlWebpackPlugin({
    template: './views/index.ejs',
    inject: false,
  }),
];

webpackSettings.plugins = optimizingPlugins;
webpackSettings.entry = webpackSettings.entry.filter((entryName) => {
  return (entryName.indexOf('hot/dev-server') === -1);
});

module.exports = webpackSettings;
