// routers
var RouterHandler = require('./src/router/index');
// urils
var utils = require('./setup/app/utils/methods');
var createApp = require('./setup/app/createApp');
const pathTo = require('./setup/app/utils/pathTo');

var setConfig = function (expressApp) {
  console.log(pathTo.viewsDir)
  utils.prepareEnvFiles();
  utils.setViews(expressApp, pathTo.viewsDir);
  utils.useLogger(expressApp);
  utils.useJson(expressApp);
  utils.useCookies(expressApp);
  utils.setUrlEncode(expressApp);
  utils.setStaticPath(expressApp);
  utils.setCORSHeaders(expressApp, {
    allowAllRequests: true,
  });
};

var configAndStartApp = () => {
  var expressApp = createApp();
  setConfig(expressApp);
  expressApp.use('/', RouterHandler);
  return expressApp;
};

var app = configAndStartApp();

module.exports = app;
