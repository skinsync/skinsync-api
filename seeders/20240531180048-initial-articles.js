"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "Cara Menjaga Kesehatan Kulit agar Tampak Sehat dan Terawat",
          description: `Menjaga kesehatan kulit menjadi kunci agar penampilanmu senantiasa terlihat terawat dan menawan. Untuk memastikan kulit sehat, sejumlah cara menjaga kesehatan kulit pun sebaiknya kamu lakukan secara konsisten.

          Kulit sehat bisa dijaga dari luar dan dari dalam. Tidak hanya dengan memakai produk perawatan yang ideal, secara alami kulit bisa menjadi lebih sehat jika kamu menjalankan sejumlah kebiasaan yang baik untuk kulit.
          
          Berikut ini adalah beberapa cara menjaga kesehatan kulit yang dapat kamu lakukan setiap hari. Selain kulit lebih sehat dan terawat, kebiasaan-kebiasaan baik di bawah ini juga berpengaruh positif untuk kesehatan tubuhmu secara keseluruhan.`,
          picture:
            "https://assets.unileversolutions.com/v1/42503275.jpg?im=Resize,width=1100,height=486",
          url: "https://www.lifebuoy.co.id/semua-artikel/berita-kesehatan/cara-menjaga-kesehatan-kulit-agar-tampak-sehat-dan-terawat.html",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("articles", null, {});
  },
};
