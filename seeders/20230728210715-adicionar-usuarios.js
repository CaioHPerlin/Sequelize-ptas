"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert("usuarios", [
      {nome: "Caio Hygino Perlin de Lima",},
      {nome: "Moonie de Oliveira Mederios"},
      {nome: "Victor Hugo Dantas de Macedo"}
    ],{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
