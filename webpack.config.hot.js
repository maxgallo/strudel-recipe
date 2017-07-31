const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

webpackConfig.plugins = [
    new webpack.NamedModulesPlugin()
];

webpackConfig.entry = [
    'react-hot-loader/patch',
    webpackConfig.entry
];

module.exports = webpackConfig;
