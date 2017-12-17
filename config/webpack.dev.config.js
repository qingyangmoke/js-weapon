const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const banner = `js-weapon
Description:js 常用代码库
Author: ${pkg.author}
Version: v${pkg.version}
Github: https://github.com/qingyangmoke/js-weapon.git`
  ;
console.log(process.env.NODE_ENV);

const config = {
  entry: {
    'JSWeapon': [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: `${pkg.name}.debug.js`,
    libraryTarget: 'umd',
    library: ['[name]'],
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      DEBUG: process.env.NODE_ENV === 'development'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'string-replace',
        query: {
          multiple: [
            {
              search: '__PKG_VERSION__', // 版本号
              replace: `${pkg.version}`
            }
          ]
        }
      }
    ],
  },
};

module.exports = config;
