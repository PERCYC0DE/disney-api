const { Model, DataTypes, Sequelize } = require("sequelize");

const GENDER_TABLE = "genders";

const GenderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.UUID,
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
      tableName: GENDER_TABLE,
      modelName: "Gender",
      timestamps: false,
    };
  }
}

module.exports = {
  GENDER_TABLE,
  GenderSchema,
  Gender,
};
