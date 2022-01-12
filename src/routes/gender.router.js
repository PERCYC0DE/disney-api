const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send("Show all genders");
  })
  .post("/", (req, res) => {
    res.send("Creating a new gender");
  });

module.exports = router;
