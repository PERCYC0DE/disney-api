const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(10);
const image = Joi.string().uri();

const createCharacterSchema = Joi.object({
  name: name.required(),
  image: image.required(),
});

const updateCharacterSchema = Joi.object({
  name: name,
  image: image,
});

const getCharacterSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCharacterSchema,
  updateCharacterSchema,
  getCharacterSchema,
};
