"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "brands",
      [
        {
          name: "Wardah",
          description:
            "Brand kosmetik dan skincare halal yang terkenal dengan produk-produknya yang terjangkau dan berkualitas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Emina",
          description:
            "Brand kosmetik dan skincare untuk remaja dengan desain yang lucu dan trendy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Make Over",
          description:
            "Brand kosmetik profesional yang menawarkan produk-produk high-end dengan kualitas terbaik",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Purbasari",
          description:
            "Brand kosmetik dan skincare yang menggunakan bahan-bahan alami dari Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Avoskin",
          description:
            "Brand skincare lokal yang terkenal dengan produk-produknya yang inovatif dan menggunakan bahan-bahan aktif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scarlett Whitening",
          description:
            "Brand skincare lokal yang terkenal dengan produk-produknya untuk mencerahkan kulit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Somethinc",
          description:
            "Brand skincare lokal yang terkenal dengan produk-produknya yang trendy dan kekinian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dear Me Beauty",
          description:
            "Brand skincare lokal yang terkenal dengan produk-produknya yang vegan dan cruelty-free",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Y.O.U Beauty",
          description:
            "Brand kosmetik dan skincare lokal yang terkenal dengan produk-produknya yang terjangkau dan berkualitas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lacoco",
          description:
            "Brand skincare lokal yang terkenal dengan produk-produknya yang menggunakan bahan-bahan alami",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "L'Oreal",
          description:
            "Brand kosmetik dan skincare ternama dari Prancis yang menawarkan berbagai macam produk untuk berbagai jenis kulit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maybelline",
          description:
            "Brand kosmetik dan skincare ternama dari Amerika Serikat yang terkenal dengan produk-produknya yang terjangkau dan berkualitas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Garnier",
          description:
            "Brand kosmetik dan skincare ternama dari Prancis yang terkenal dengan produk-produknya yang menggunakan bahan-bahan alami",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nivea",
          description:
            "Brand skincare ternama dari Jerman yang terkenal dengan produk-produknya untuk melembabkan kulit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pond's",
          description:
            "Brand skincare ternama dari Amerika Serikat yang terkenal dengan produk-produknya untuk mencerahkan kulit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olay",
          description:
            "Brand skincare ternama dari Amerika Serikat yang terkenal dengan produk-produknya untuk anti-aging",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Skin Aqua",
          description:
            "Brand skincare ternama dari Jepang yang terkenal dengan produk-produknya untuk melindungi kulit dari sinar matahari",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
