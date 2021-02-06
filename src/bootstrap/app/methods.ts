// main dependencies
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import errorHandler from "errorhandler";
import cors from "cors";

// utils
import pathTo from "./utils/pathTo";
import config from "./config";

const defaultMethods = ["GET", "POST", "GET", "PATH", "PUT", "DELETE"];

// Read env files from root of project
console.log("pathTo", pathTo)

const prepareEnvFiles = (config?: any) =>
  require("dotenv").config(config || { path: pathTo.mainProdEnvSrc });

const setViews = (
  app: { set: (arg0: string, arg1: any) => void },
  viewsDirectory?: any,
  templateEngine?: any
) => {
  // view engine setup
  console.log(pathTo.viewsDir);
  app.set("views", viewsDirectory || pathTo.viewsDir);
  app.set("view engine", templateEngine || config.templateEngine);
};
const useLogger = (app: { use: (arg0: any) => any }) => app.use(logger("dev"));

const useJson = (app: { use: (arg0: any) => any }) => app.use(express.json());

const useCookies = (app: { use: (arg0: any) => any }) =>
  app.use(cookieParser());

const setUrlEncode = (app: { use: (arg0: any) => any }) =>
  app.use(express.urlencoded({ extended: false }));

const setStaticPath = (app: { use: (arg0: any) => any }, publicDir?: any) =>
  app.use(express.static(publicDir || pathTo.publicDir));

const setCORSHeaders = (
  app: { use: (arg0: (req: any, res: any, next: any) => void) => void },
  {
    allowAllRequests = false,
    origins = [],
    methods = defaultMethods,
    headers = [],
  }: any
) => {
  if (allowAllRequests) {
    app.use(cors());
  } else {
    app.use(
      (
        req: any,
        res: { header: (arg0: string, arg1: string) => void },
        next: () => void
      ) => {
        res.header("Access-Control-Allow-Origin", origins.toString());
        res.header("Access-Control-Allow-Methods", methods.toString());
        res.header("Access-Control-Allow-Headers", headers.toString());
        next();
      }
    );
  }
};

const startErrorHandler = (app: {
  use: (arg0: (err: any, req: any, res: any, next: any) => void) => void;
}) => {
  /**
   * Error Handler.
   */
  if (process.env.NODE_ENV === "development") {
    // only use in development
    app.use(errorHandler());
  } else {
    app.use(
      (
        err: any,
        req: any,
        res: {
          status: (
            arg0: number
          ) => {
            (): any;
            new (): any;
            send: { (arg0: string): void; new (): any };
          };
        },
        next: any
      ) => {
        console.error(err);
        res.status(500).send("Server Error");
      }
    );
  }
};

export {
  startErrorHandler,
  prepareEnvFiles,
  setViews,
  useLogger,
  useJson,
  useCookies,
  setUrlEncode,
  setStaticPath,
  setCORSHeaders,
};
