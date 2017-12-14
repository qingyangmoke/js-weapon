const path = require('path');
const fs = require('fs');
const ora = require('ora');
const rm = require('rimraf');
const copy = require('copy');
const chalk = require('chalk');
const webpack = require('webpack');

const config = require('../config/webpack.config');
const pkg = require('../package.json');
const rootPath = path.resolve(__dirname, '../');
const distPath = path.resolve(rootPath, 'dist');
const srcPath = path.resolve(rootPath, 'src');

const newPackage = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  description: pkg.description,
  keywords: pkg.keywords,
  repository: pkg.repository,
  main: `${pkg.name}.min.js`,
  scripts: {},
  license: pkg.license,
  bugs: pkg.bugs,
  homepage: pkg.homepage,
};

new Promise((resolve, reject) => {
  // 构建全量压缩包
  const building = ora('building...');
  building.start();
  rm(path.resolve(distPath, `*.js`), err => {
    if (err) throw (err);
    webpack(config, function (err, stats) {
      if (err) throw (err);
      building.stop();
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n');
      resolve();
      console.log(chalk.green('  Build complete.\n'));
    });
  });
}).then(() => {
  console.log(chalk.cyan('  写入package.json.\n'));
  fs.writeFileSync(path.resolve(distPath, 'package.json'), JSON.stringify(newPackage), {
    flag: 'w',
    encoding: 'utf8',
  });
  console.log(chalk.green('  写入package.json complete.\n'));
  console.log(chalk.cyan('  copying LICENSE.\n'));
  copy(`${rootPath}/LICENSE`, distPath, function (err, files) {
    if (err) throw err;
    console.log(chalk.green('  copying LICENSE complete.\n'));
    // 替换模块文件
    const copying = ora('copying...\n');
    copying.start();
    const folderList = fs.readdirSync(srcPath);
    folderList.forEach((item, index) => {
      console.log(chalk.cyan(`  copying ${item}.\n`));
      copy(`src/${item}/*.js`, distPath, function (err, files) {
        if (err) throw err;
        console.log(chalk.green(`  copying ${item} complete.\n`));
        if (index === folderList.length - 1) {
          console.log(chalk.green('  Copy complete.\n'));
          copying.stop();
        }
      });
    });
  });
}).catch((err) => {
  throw err;
});
