// utils
const { ROUTE_NAMES } = require("./utils/names");
const { ROUTE_PATHES } = require("./utils/pathes");
const { HTTP_METHODS } = require("./utils/http-methods");
// controllers
const { GitHubApiController } = require("../controllers/github-controller");
const { IndexController } = require("../controllers/index-controller");

const Routes = [
  {
    name: ROUTE_NAMES.INDEX,
    path: ROUTE_PATHES.INDEX,
    type: HTTP_METHODS.GET,
    controller: IndexController,
  },
  {
    name: ROUTE_NAMES.GITHUB_API,
    path: ROUTE_PATHES.GITHUB_API,
    type: HTTP_METHODS.GET,
    controller: GitHubApiController,
  },
];

exports.Routes = Routes;
