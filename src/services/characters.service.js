const boom = require("@hapi/boom");

// const getConnection = require("../libs/postgres");
// const pool = require("../libs/postgres.pool");
const { models } = require("../libs/sequelize");

class CharactersService {
  constructor() {
    this.characters = [];
    // this.generate();
    // this.pool = pool;
    // this.pool.on("error", (err) => console.log(err));
  }

  async create(data) {
    const newCharacter = await models.Character.create(newCharacter);
    return newCharacter;
  }

  async find() {
    const characters = await models.Character.findAll();
    return characters;
  }

  async findOne(id) {
    const characterFound = await models.Character.findByPk(id);
    if (!characterFound) {
      throw boom.notFound("Character Not Found");
    }
    return characterFound;
  }

  async update(id, dataToChange) {
    const characterFound = await this.findOne(id);
    const response = await characterFound.update(dataToChange);
    return response;
  }

  async delete(id) {
    const characterFound = await this.findOne(id);
    await characterFound.destroy();
    return { id };
  }
}

module.exports = CharactersService;
