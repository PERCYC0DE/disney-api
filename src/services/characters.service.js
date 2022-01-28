const boom = require("@hapi/boom");

// const getConnection = require("../libs/postgres");
// const pool = require("../libs/postgres.pool");
const { models } = require("../libs/sequelize");

class CharactersService {
  constructor() {
    // this.characters = [];
    // this.generate();
    // this.pool = pool;
    // this.pool.on("error", (err) => console.log(err));
  }

  async create(newCharacter) {
    const characterCreated = await models.Character.create(newCharacter);
    return characterCreated;
  }

  async find() {
    const characters = await models.Character.findAll();
    return characters;
  }

  async findOne(id) {
    const characterFound = await models.Character.findByPk(id);
    if (!characterFound) {
      throw boom.notFound(
        "Ups! Character not found! Please try another character."
      );
    }
    return characterFound;
  }

  async update(id, dataToChange) {
    const characterFound = await this.findOne(id);
    const result = await characterFound.update(dataToChange);
    return result;
  }

  async delete(id) {
    const characterFound = await this.findOne(id);
    await characterFound.destroy();
    return { id };
  }
}

module.exports = CharactersService;
