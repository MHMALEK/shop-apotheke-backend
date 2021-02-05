// main dependencies
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var cors = require('cors');

// utils
const pathTo = require('./pathTo');
const config = require('../config');

const defaultMethods = ['GET', 'POST', 'GET', 'PATH', 'PUT', 'DELETE'];

// Read env files from root of project
exports.prepareEnvFiles = (config) =>
  require('dotenv').config(config || { path: pathTo.mainProdEnvSrc });

exports.setViews = (app, viewsDirectory, templateEngine) => {
  // view engine setup
  app.set('views', viewsDirectory || pathTo.viewsDir);
  app.set('view engine', templateEngine || config.templateEngine);
};

exports.useLogger = (app) => app.use(logger('dev'));

exports.useJson = (app) => app.use(express.json());

exports.useCookies = (app) => app.use(cookieParser());

exports.setUrlEncode = (app) =>
  app.use(express.urlencoded({ extended: false }));

exports.setStaticPath = (app, publicDir) =>
  app.use(express.static(publicDir || pathTo.publicDir));

exports.setCORSHeaders = (
  app,
  { allowAllRequests = false, origins = [], methods = defaultMethods, headers = [] },
) => {
  if (allowAllRequests) {
    app.use(cors());
  } else {
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', origins.toString());
      res.header('Access-Control-Allow-Methods', methods.toString());
      res.header('Access-Control-Allow-Headers', headers.toString());
      next();
    });
  }
};

exports.startErrorHandler = (app) => {
  /**
   * Error Handler.
   */
  if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
  } else {
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Server Error');
    });
  }
};
