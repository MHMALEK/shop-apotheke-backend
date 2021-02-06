// routers
import RouterHandler from "../../router/index";
// urils
import * as utils from "./methods";
import createApp from "./createApp";
import pathTo from "./utils/pathTo";

const setConfig = function (expressApp: any) {
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

const configAndStartApp = () => {
  const expressApp = createApp();
  setConfig(expressApp);
  expressApp.use("/", RouterHandler);
  return expressApp;
};

const app = configAndStartApp();

export default app;
