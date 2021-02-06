// utils
const { pathTo } = require('./utils');
// externals
const { externals } = require('./externals');
// resolve
const { resolve } = require('./resolve');
// variables
const isDev = process.env === 'development';
// rules
const {typescriptAndJavascriptRules} = require('./rules');

module.exports = {
  entry: pathTo.entryPointSrc,
  target: 'node',
  externals,
  output: {
    path: pathTo.buildDir,
    filename: 'index.js',
  },
  module: {
    rules: [typescriptAndJavascriptRules],
  },
  resolve,
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
};
