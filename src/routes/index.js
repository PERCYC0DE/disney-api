const express = require("express");

// Routes
const charactersRouter = require("./characters.router");
const moviesRouter = require("./movies.router");
const usersRouter = require("./users.router");
const genderRouter = require("./gender.router");

// Function for dynamics routes
function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/characters", charactersRouter);
  router.use("/movies", moviesRouter);
  router.use("/users", usersRouter);
  router.use("/genders", genderRouter);
}

module.exports = routerApi;
