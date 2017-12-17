const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const config = require('./webpack.dev.config');

// 压缩版
const minConfig = merge(config, {
  output: {
    filename: `${pkg.name}.min.js`,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        pure_funcs: ['console.log'], // 配置发布时，不被打包的函数
        // drop_debugger: true, // 发布时去除debugger
        // drop_console: true // 发布时去除console
      },
    }),
  ],
});

module.exports = [minConfig, config];
