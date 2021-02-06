// utils
import ROUTE_NAMES from "./utils/names";
import ROUTE_PATHES from "./utils/pathes";
import { HTTP_METHODS } from "../utils/http-client/types";
// controllers
import GitHubApiController from "../controllers/github-controller";
import IndexController from "../controllers/index-controller";

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

export default Routes;
