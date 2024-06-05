"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_types",
      [
        {
          name: "Cleanser",
          description:
            "Digunakan untuk membersihkan wajah dari kotoran, debu, dan minyak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Makeup remover",
          description: "Digunakan untuk membersihkan makeup dari wajah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toner",
          description:
            "Digunakan untuk menyegarkan wajah dan menyeimbangkan pH kulit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Exfoliator",
          description:
            "Digunakan untuk mengangkat sel kulit mati dan membuat kulit lebih halus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Masker",
          description:
            "Digunakan untuk memberikan nutrisi dan perawatan ekstra pada kulit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moisturizer",
          description: "Digunakan untuk menjaga kelembapan kulit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sunblock",
          description: "Digunakan untuk melindungi kulit dari sinar matahari",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eye cream",
          description: "Digunakan untuk merawat kulit di sekitar mata",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lip balm",
          description: "Digunakan untuk melembabkan bibir",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Serum",
          description:
            "Digunakan untuk mengatasi masalah kulit tertentu, seperti jerawat, keriput, atau flek hitam",
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
