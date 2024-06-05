"use strict";
const { hashSync } = require("bcrypt");
const dotenv = require("dotenv").config().parsed;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "admin",
          email: "admin@skinsync.com",
          password: hashSync("password", parseInt(dotenv.SALT_ROUND)),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          email: "johndoe@skinsync.com",
          password: hashSync("password", parseInt(dotenv.SALT_ROUND)),
          role: 'member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
