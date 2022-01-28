const express = require("express");
const router = express.Router();

//=== Get all users
router.get("/", (req, res) => {
  res.send("All Users");
});

//=== Create a new user
router.post("/", (req, res) => {
  res.send("Creating a User");
});

module.exports = router;
