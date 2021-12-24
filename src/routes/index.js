const express = require("express");
const charactersRouter = require("./characters.router");
const moviesRouter = require("./movies.router");
const usersRouter = require("./users.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/characters", charactersRouter);
  router.use("/movies", moviesRouter);
  router.use("/users", usersRouter);
}

module.exports = routerApi;
