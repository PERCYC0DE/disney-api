// All Models required
const { Character, CharacterSchema } = require("./character.model");
const { Movie, MovieSchema } = require("./movie.model");
const { Gender, GenderSchema } = require("./gender.model");
const { User, UserSchema } = require("./user.model");

function setupModels(sequelize) {
  // Setup Models
  Character.init(CharacterSchema, Character.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
