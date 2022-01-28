const express = require("express");
const router = express.Router();

//=== Get all genders
router.get("/", (req, res) => {
  res.send("Show all genders");
});

//=== Create a gender
router.post("/", (req, res) => {
  res.send("Creating a new gender");
});

module.exports = router;
