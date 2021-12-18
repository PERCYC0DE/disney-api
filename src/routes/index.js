const express = require("express");
const charactersRouter = require("./characters.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/characters", charactersRouter);
}

module.exports = routerApi;