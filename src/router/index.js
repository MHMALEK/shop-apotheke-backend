const express = require("express");
const router = express.Router();
const { Routes } = require("./routes");

Routes.map((route) => router[route.type](route.path, route.controller));

module.exports = router;
