"use strict";
const {
  CharacterSchema,
  CHARACTER_TABLE,
} = require("../models/character.model");
module.exports = {
  // Create
  async up(queryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
  },

  // Revert
  async down(queryInterface) {
    await queryInterface.dropTable(CHARACTER_TABLE);
  },
};
