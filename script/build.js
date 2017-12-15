/* eslint-disable */
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
const buildPath = path.resolve(rootPath, 'dist');
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

// 构建全量压缩包
const building = ora('building...\n\n');
building.start();

new Promise((resolve, reject) => {
  // 1.清空目录
  console.log(chalk.cyan(`1.clear dist directory ...\n\n`));
  rm(path.resolve(buildPath, `*`), err => {
    if (err) {
      reject(err);
      return;
    };
    resolve();
  });
  console.log(chalk.green(`  clear complete\n\n`));
}).then(() => {
  // 2.拷贝js文件到根目录
  return new Promise((resolve, reject) => {
    console.log(chalk.cyan('2.copy js files to dist ...\n\n'));
    const folderList = fs.readdirSync(srcPath);
    folderList.forEach((item, index) => {
      var stat = fs.statSync(path.join(srcPath, item));
      if (stat.isDirectory()) {
        console.log(chalk.cyan(`  copying directory ${item}...\n`));
        const files = fs.readdirSync(path.resolve(srcPath, item));
        if (files.length > 0) {
          files.forEach((file, index) => {
            const srcFile = path.resolve(srcPath, item, file);
            const distFile = path.resolve(distPath, file);
            let data = fs.readFileSync(srcFile, { encoding: 'utf8' });
            const matchData = data.match(/require\([\'\"]?[^\)]+\)/);
            matchData && matchData.forEach((item) => {
              if (item.indexOf('/') > -1) {
                const newitem = item.substring(0, item.indexOf("'") + 1) + './' + item.substring(item.lastIndexOf("/") + 1);
                data = data.replace(item, newitem);
              }
            });
            fs.writeFileSync(distFile, data, { encoding: 'utf8' });
            console.log(chalk.green(`  copy file ${srcFile} ==> ${distFile} \n`));
          });
        }
      }
      // copy(`src/${item}/*.js`, distPath, function (err, files) {
      //   if (err) {
      //     reject(err);
      //     return;
      //   };
      //   console.log(chalk.green(`  copying ${item} complete.\n`));
      //   if (index === folderList.length - 1) {
      //     console.log(chalk.green('  Copy complete.\n'));
      //     copying.stop();
      //     resolve();
      //   }
      // });
      // function replacePromise(filePath) {
      //   return new Promise((resolve, reject) => {
      //     const data = fs.readFileSync(filePath, { encoding: 'utf8' });
      //     const result = data.replace(your - regex - or - text, replacement - text);
      //     fs.writeFileSync(filePath, result, { encoding: 'utf8' });
      //     resolve();
      //   });
      // }
    });
    resolve();
  });
}).then(() => {
  // 3.webpack打包
  return new Promise((resolve, reject) => {
    console.log(chalk.cyan('3.webpack building... \n'));
    webpack(config, function (err, stats) {
      if (err) {
        reject(err);
        return;
      };
      building.stop();
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n');
      console.log(chalk.green('  webpack Build complete.\n'));
      resolve();
    });
  });
}).then(() => {
  // 4.写入package.json
  console.log(chalk.cyan('4.write package.json\n'));
  fs.writeFileSync(path.resolve(distPath, 'package.json'), JSON.stringify(newPackage), {
    flag: 'w',
    encoding: 'utf8',
  });
  console.log(chalk.green('   write package.json complete.\n'));
  return Promise.resolve();
}).then(() => {
  // 5.拷贝LICENSE
  return new Promise((resolve, reject) => {
    console.log(chalk.cyan('5.copy LICENSE\n'));
    copy(`${rootPath}/LICENSE`, distPath, function (err, files) {
      if (err) {
        reject(err);
        return;
      };
      resolve();
      console.log(chalk.green('  copying LICENSE complete.\n'));
    });
  });
}).then(() => {
  console.log(chalk.green('Build finish.\n'));
}).catch((err) => {
  throw err;
});
// new Promise((resolve, reject) => {
//   // 构建全量压缩包
//   const building = ora('building...');
//   building.start();
//   rm(path.resolve(distPath, `*.js`), err => {
//     if (err) throw (err);
//     webpack(config, function (err, stats) {
//       if (err) throw (err);
//       building.stop();
//       process.stdout.write(stats.toString({
//         colors: true,
//         modules: false,
//         children: false,
//         chunks: false,
//         chunkModules: false,
//       }) + '\n\n');
//       resolve();
//       console.log(chalk.green('  Build complete.\n'));
//     });
//   });
// }).then(() => {
//   console.log(chalk.cyan('  写入package.json.\n'));
//   fs.writeFileSync(path.resolve(distPath, 'package.json'), JSON.stringify(newPackage), {
//     flag: 'w',
//     encoding: 'utf8',
//   });
//   console.log(chalk.green('  写入package.json complete.\n'));
//   console.log(chalk.cyan('  copying LICENSE.\n'));
//   copy(`${rootPath}/LICENSE`, distPath, function (err, files) {
//     if (err) throw err;
//     console.log(chalk.green('  copying LICENSE complete.\n'));
//     // 替换模块文件
//     const copying = ora('copying...\n');
//     copying.start();
//     const folderList = fs.readdirSync(srcPath);
//     folderList.forEach((item, index) => {
//       console.log(chalk.cyan(`  copying ${item}.\n`));
//       copy(`src/${item}/*.js`, distPath, function (err, files) {
//         if (err) throw err;
//         console.log(chalk.green(`  copying ${item} complete.\n`));
//         if (index === folderList.length - 1) {
//           console.log(chalk.green('  Copy complete.\n'));
//           copying.stop();
//         }
//       });
//     });
//   });
// }).catch((err) => {
//   throw err;
// });
