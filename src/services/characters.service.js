const faker = require("faker");
const boom = require("@hapi/boom");

// const getConnection = require("../libs/postgres");
// const pool = require("../libs/postgres.pool");
const { models } = require("../libs/sequelize");

class CharactersService {
  constructor() {
    this.characters = [];
    this.generate();
    // this.pool = pool;
    // this.pool.on("error", (err) => console.log(err));
  }

  generate() {
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.characters.push({
        id: faker.datatype.uuid(),
        image: faker.image.image(),
        name: faker.name.findName(),
      });
    }
  }

  async create(data) {
    const newCharacter = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.characters.push(newCharacter);
    return newCharacter;
  }

  async find() {
    // const client = await getConnection();
    // const response = await client.query("SELECT * FROM characters");
    // return response.rows;
    // const query = "SELECT * FROM characters";
    const characters = await models.Character.findAll();
    // const [data] = await sequelize.query(query);
    return characters;
  }

  async findOne(id) {
    const character = await this.characters.find((item) => item.id === id);
    if (!character) {
      throw boom.notFound("Character Not Found");
    }
    return character;
  }

  async update(id, data) {
    const index = this.characters.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound("Character Not Found");
    }

    const character = this.characters[index];
    this.characters[index] = {
      ...character,
      ...data,
    };
    return this.characters[index];
  }

  async delete(id) {
    const index = this.characters.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Character Not Found");
    }
    this.characters.splice(index, 1);
    return { id };
  }
}

module.exports = CharactersService;
