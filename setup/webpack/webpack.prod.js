const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // any change for production build (if needed any. it's not a real change for this app, but it might be in real production app)
  mode: 'production',
});
