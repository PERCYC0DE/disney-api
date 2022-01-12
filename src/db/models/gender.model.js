const { Model, DataTypes, Sequelize } = require("sequelize");

const GENDER_MODEL = "genders";

const GenderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  associatedMovies: {
    type: DataTypes.ARRAY(Sequelize.TEXT),
  },
};

class Gender extends Model {
  static associations() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: GENDER_MODEL,
      modelName: "Gender",
      timestamps: false,
    };
  }
}

module.exports = {
  GENDER_MODEL,
  GenderSchema,
  Gender,
};
