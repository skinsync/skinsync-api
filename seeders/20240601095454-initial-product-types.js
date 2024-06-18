"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_types",
      [
        {
          name: "face wash",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "toner",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "serum",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "moisturizer",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sunscreen",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_types", null, {});
  },
};
