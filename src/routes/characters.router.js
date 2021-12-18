const express = require("express");
const router = express.Router();
const faker = require("faker");

// GET ALL CHARACTERS
router.get("/", (req, res) => {
  const characters = [];
  const { size } = req.query;
  const limit = size || 20;
  for (let i = 0; i < limit; i++) {
    characters.push({
      image: faker.image.image(),
      name: faker.name.findName()
    });
  }
  res.json(characters);
});

// GET CHARACTER DETAIL
router.get("/:id", (req, res) => {
  res.send("Characters for id");
});


// SEARCH CHARACTER FOR NAME, AGE, MOVIES


// CREATE CHARACTER
router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Character created",
    data: body,
  });
});

// UPDATE CHARACTER

// UPDATE PARTIAL CHARACTER
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Update partial",
    data: body,
    id,
  });
});

// DELETE CHARACTER
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
      message: "Delete Character",
      id,
    });
  });


module.exports = router;
