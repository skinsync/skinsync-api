"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_types",
      [
        {
          name: "Face Wash",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toner",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Serum",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moisturizer",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sunscreen",
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
