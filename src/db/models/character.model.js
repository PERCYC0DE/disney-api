const { Model, DataTypes, Sequelize } = require("sequelize");

const CHARACTER_TABLE = "characters";

const CharacterSchema = {
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
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.FLOAT,
  },
  history: {
    type: DataTypes.STRING,
  },
  movies: {
    type: DataTypes.ARRAY(Sequelize.TEXT),
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Character extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_TABLE,
      modelName: "Character",
      timestamps: false,
    };
  }
}

module.exports = {
  CHARACTER_TABLE,
  CharacterSchema,
  Character,
};
