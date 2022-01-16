const Joi = require("joi");
// const id = Joi.string().uuid();
const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(10);
const image = Joi.string().uri();
const age = Joi.number().min(1);
const weight = Joi.number().positive();
const history = Joi.string();
const movies = Joi.array();

// Schema for create a new character
const createCharacterSchema = Joi.object({
  image: image.required(),
  name: name.required(),
  age: age.required(),
  weight: weight.required(),
  history: history.required(),
  movies: movies.required(),
});

// Schema for update character
const updateCharacterSchema = Joi.object({
  name: name,
  age: age,
  // image: image,
  // id: id.required(),
});

// Schema for get a character
const getCharacterSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCharacterSchema,
  updateCharacterSchema,
  getCharacterSchema,
};
