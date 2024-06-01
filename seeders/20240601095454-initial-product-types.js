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
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Makeup remover",
          description: "Digunakan untuk membersihkan makeup dari wajah",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Toner",
          description:
            "Digunakan untuk menyegarkan wajah dan menyeimbangkan pH kulit",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Exfoliator",
          description:
            "Digunakan untuk mengangkat sel kulit mati dan membuat kulit lebih halus",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Masker",
          description:
            "Digunakan untuk memberikan nutrisi dan perawatan ekstra pada kulit",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Moisturizer",
          description: "Digunakan untuk menjaga kelembapan kulit",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sunblock",
          description: "Digunakan untuk melindungi kulit dari sinar matahari",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Eye cream",
          description: "Digunakan untuk merawat kulit di sekitar mata",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lip balm",
          description: "Digunakan untuk melembabkan bibir",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Serum",
          description:
            "Digunakan untuk mengatasi masalah kulit tertentu, seperti jerawat, keriput, atau flek hitam",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_types", null, {});
  },
};
