"use strict";
const { hashSync } = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "admin",
          email: "admin@skinsync.com",
          password: hashSync("password", 8),
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John Doe",
          email: "johndoe@skinsync.com",
          password: hashSync("password", 8),
          role: 'member',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
