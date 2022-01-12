const express = require("express");
const router = express.Router();

// GET ALL USERS
router.get("/", (req, res) => {
  res.send("All Users");
});

router.post("/", (req, res) => {
  res.send("Creating a User");
});


module.exports = router;
