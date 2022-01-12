const { Model, DataTypes, Sequelize } = require("sequelize");
const MOVIE_TABLE = "movies";

const MovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  creationDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  ranking: {
    allowNull: false,
    type: DataTypes.ENUM("1", "2", "3", "4", "5"),
  },
  associatedCharacters: {
    type: DataTypes.ARRAY(Sequelize.TEXT),
  },
};

class Movie extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: "Movie",
      timestamps: false,
    };
  }
}

module.exports = {
  MOVIE_TABLE,
  MovieSchema,
  Movie,
};
