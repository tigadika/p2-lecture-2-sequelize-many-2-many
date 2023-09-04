'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require('../data.json').Movies
    data.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Movies', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null)
  }
};
