'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require('../data.json').Actors
    data.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Actors', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Actors', null)
  }
};
