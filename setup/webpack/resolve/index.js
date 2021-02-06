const {pathTo} = require('../utils');

const extensions = ['.ts', '.js'];
const alias = {
  '@': pathTo.srcDir,
};
const modules = ['node_modules', pathTo.srcDir];

const resolve = {
  extensions,
  modules,
  alias,
};

exports.resolve = resolve;
