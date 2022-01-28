const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class MoviesService {
  constructor() {}

  async create(movie) {
    const newMovie = await models.Movie.create(movie);
    return newMovie;
  }

  async find() {
    const movies = await models.Movie.findAll();
    return movies;
  }

  async findOne(idMovie) {
    const movieToFind = await models.Movie.findByPk(idMovie);
    if (!movieToFind) {
      throw boom.notFound("Ups! Movie not found! Please try another movie.");
    }
    return movieToFind;
  }

  async update(idMovie, dataToChange) {
    const movieToFind = await this.findOne(idMovie);
    const result = await movieToFind.update(dataToChange);
    return result;
  }

  async delete(idMovie) {
    const movieToFind = await this.findOne(idMovie);
    await movieToFind.destroy();
    return { idMovie };
  }

  // async search(params) {}
}

module.exports = MoviesService;
