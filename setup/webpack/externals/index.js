// plugins
const nodeExternals = require('webpack-node-externals');

const externals = [nodeExternals()];
exports.externals = externals;
