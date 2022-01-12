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

router.get("/", async (req, res) => {
  try {
    const characters = await serviceCharacters.find();
    res.json(characters);
  } catch (error) {
    console.log(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getCharacterSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const character = await serviceCharacters.findOne(id);
      res.json(character);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createCharacterSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const newCharacter = await serviceCharacters.create(body);
    res.status(201).json(newCharacter);
  }
);

router.patch(
  "/:id",
  validatorHandler(updateCharacterSchema, "params"),
  validatorHandler(updateCharacterSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const character = await serviceCharacters.update(id, body);
      res.json(character);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const character = await serviceCharacters.delete(id);
  res.json(character);
});

router.get("/search", (req, res) => {
  res.send("Searching character...");
});

module.exports = router;
