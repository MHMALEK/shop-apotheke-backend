import express from "express";
import Routes from "./routes";
import { routeModel } from "./types";

const router = express.Router();

Routes.map((route: routeModel) =>
  router[route.type](route.path, route.controller)
);

export default router;
