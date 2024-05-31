'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'pandji2',
      email: 'example2@example.com',
      password:'12345678',
      created_at: new Date(),
      updated_at: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});

  }
};
