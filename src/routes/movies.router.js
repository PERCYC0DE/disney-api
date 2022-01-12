const express = require("express");
const router = express.Router();

// GET ALL MOVIES
router.get("/", async (req, res) => {
  try {
    // Show only image, title and createdDate
    res.send("All movies");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:idMovie", async (req, res, next) => {
  try {
    const { idMovie } = req.params;
    res.status(200).json(idMovie);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    res.status(201).json(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:idMovie", (req, res) => {
  const { idMovie } = req.params;
  const updatedData = req.body;
  res.status(201).json(idMovie);
});

router.delete("/:idMovie", (req, res) => {
  const { idMovie } = req.params;
  res.status(200).json({
    message: `The movie ${idMovie} has deleted`,
  });
});

router.get("/search", (req, res) => {
  res.send("Searching a movie...");
});
module.exports = router;
