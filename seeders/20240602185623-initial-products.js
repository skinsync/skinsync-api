'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          brand_id: 1,
          product_type_id: 1,
          name: "Dummy Product 1",
          description: "This is a dummy product 1",
          skintype: "normal",
          url: "https://example.com",
          picture: "https://example.com/picture.jpg",
          priority: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          brand_id: 1,
          product_type_id: 1,
          name: "Dummy Product 2",
          description: "This is a dummy product 2",
          skintype: "oily",
          url: "https://example.com",
          picture: "https://example.com/picture.jpg",
          priority: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          brand_id: 1,
          product_type_id: 1,
          name: "Dummy Product 3",
          description: "This is a dummy product 3",
          skintype: "dry",
          url: "https://example.com",
          picture: "https://example.com/picture.jpg",
          priority: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
