const express = require("express");
const router = express.Router();
const CharactersService = require("../services/characters.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createCharacterSchema,
  updateCharacterSchema,
  getCharacterSchema,
} = require("../schemas/character.schema");

const serviceCharacters = new CharactersService();

// Get all characters
router.get("/", async (req, res) => {
  try {
    const characters = await serviceCharacters.find();
    // const [name, image] = characters[0].dataValues;
    res.json(characters);
  } catch (error) {
    console.log(error);
  }
});

// Get one character
router.get(
  "/:id",
  validatorHandler(getCharacterSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const character = await serviceCharacters.findOne(id);
      res.json(character);
    } catch (error) {
      //TODO: Configure message in error response
      next(error);
    }
  }
);

// Create a new character
router.post(
  "/",
  validatorHandler(createCharacterSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCharacter = await serviceCharacters.create(body);
      res.status(201).json(newCharacter);
    } catch (error) {
      next(error);
    }
  }
);

// Update a character
router.patch(
  "/:id",
  // validatorHandler(updateCharacterSchema, "params"),
  // validatorHandler(updateCharacterSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const dataToChange = req.body;
      const character = await serviceCharacters.update(id, dataToChange);
      res.json(character);
    } catch (error) {
      next(error);
    }
  }
);

// Delete a character
router.delete(
  "/:id",
  validatorHandler(getCharacterSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const character = await serviceCharacters.delete(id);
      res.json(character);
    } catch (error) {
      next(error);
    }
  }
);

//=== Search a character
router.get("/search", (req, res) => {
  res.send("Searching character...");
});

module.exports = router;
