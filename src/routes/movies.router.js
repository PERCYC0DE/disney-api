const express = require("express");
const router = express.Router();
const MoviesService = require("../services/movies.service");

const serviceMovies = new MoviesService();

//=== Get all movies
router.get("/", async (req, res, next) => {
  try {
    // Show only image, title and createdDate
    const movies = await serviceMovies.find();
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

//=== Get one movie
router.get("/:idMovie", async (req, res, next) => {
  try {
    const { idMovie } = req.params;
    const movie = await serviceMovies.findOne(idMovie);
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
});

//=== Create a movie
router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const newMovie = await serviceMovies.create(body);
    res.status(201).json(newMovie);
  } catch (error) {
    next(error);
  }
});

//=== Update a movie
router.patch("/:idMovie", async (req, res, next) => {
  try {
    const { idMovie } = req.params;
    const updatedData = req.body;
    const movieUpdated = await serviceMovies.update(idMovie, updatedData);
    res.status(201).json(movieUpdated);
  } catch (error) {
    next(error);
  }
});

//=== Delete a movie
router.delete("/:idMovie", async (req, res, next) => {
  try {
    const { idMovie } = req.params;
    const movie = await serviceMovies.delete(idMovie);
    res.status(200).json({
      message: `The movie ${idMovie} has deleted`,
    });
  } catch (err) {
    //TODO: Implement handler for errors
    next(err);
  }
});

//=== Search a movie
router.get("/search", (req, res) => {
  res.send("Searching a movie...");
});

module.exports = router;
