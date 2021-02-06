import { Request, Response } from "express";
import { HTTP_METHODS } from "../utils/http-client/types";
import ROUTE_NAMES from "./utils/names";
import ROUTE_PATHES from "./utils/pathes";

type routeModel = {
  name: ROUTE_NAMES;
  path: ROUTE_PATHES;
  type: HTTP_METHODS;
  controller: (req: Request, res: Response) => void;
};

type routesModel = [routeModel];

export { routesModel, routeModel };
