"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "Cara Menjaga Kesehatan Kulit agar Tampak Sehat dan Terawat",
          description: `Menjaga kesehatan kulit menjadi kunci agar penampilanmu senantiasa terlihat terawat dan menawan. Untuk memastikan kulit sehat, sejumlah cara menjaga kesehatan kulit pun sebaiknya kamu lakukan secara konsisten. Kulit sehat bisa dijaga dari luar dan dari dalam. Tidak hanya dengan memakai produk perawatan yang ideal, secara alami kulit bisa menjadi lebih sehat jika kamu menjalankan sejumlah kebiasaan yang baik untuk kulit. Berikut ini adalah beberapa cara menjaga kesehatan kulit yang dapat kamu lakukan setiap hari. Selain kulit lebih sehat dan terawat, kebiasaan-kebiasaan baik di bawah ini juga berpengaruh positif untuk kesehatan tubuhmu secara keseluruhan.`,
          picture:
            "https://assets.unileversolutions.com/v1/42503275.jpg?im=Resize,width=1100,height=486",
          url: "https://www.lifebuoy.co.id/semua-artikel/berita-kesehatan/cara-menjaga-kesehatan-kulit-agar-tampak-sehat-dan-terawat.html",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kulit Kering",
          description: `Definisi kulit kering, gejala kulit kering (xerosis), penyebab kulit kering, faktor-faktor risiko kulit kering, diagnosis & pengobatan kulit kering`,
          picture:
            "https://cdn.hellosehat.com/wp-content/uploads/2016/03/kulit-kering.jpg?w=750&q=75",
          url: "https://hellosehat.com/penyakit-kulit/perawatan-kulit/kulit-kering/#diagnosis-pengobatan-kulit-kering",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "5 Penyebab Kulit Kering dan Cara Mengatasinya",
          description: `Penyebab kulit kering itu beragam, ada yang disebabkan oleh faktor cuaca hingga usia. Kulit kering yang terus-menerus berulang dan tidak mendapatkan penanganan yang tepat dapat menyebabkan eksim bahkan hingga infeksi. Itu sebabnya, penting bagi kamu mengetahui faktor penyebabnya guna mencegah munculnya kondisi tersebut. Lantas, apa saja penyebab kulit kering yang umum terjadi? Simak ulasannya berikut ini.`,
          picture:
            "https://assets.unileversolutions.com/v1/66679781.jpg?im=Resize,width=1100,height=486",
          url: "https://www.lifebuoy.co.id/semua-artikel/berita-kesehatan/lima-penyebab-kulit-kering-dan-cara-mengatasinya.html",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Punya Kulit Kering dan Kasar? Ini 5 Cara untuk Merawatnya!",
          description: `Kamu mungkin sedang memiliki permasalahan kulit kering dan kasar. Kondisi kulit yang kering dan kasar ini terjadi karena kurangnya kandungan minyak atau lemak di dalam kulit sehingga menurunkan tingkat kelembapan atau hidrasi kulit wajah kamu. Nah, kondisi ini selain mengganggu penampilan juga seringkali membuat kita tidak nyaman untuk melakukan aktivitas sehari-hari. Biasanya, saat kamu sedang mengalami kulit yang kering dan kasar, kamu bisa merasakan beberapa kondisi, simak pembahasannya berikut ini.`,
          picture:
            "https://www.neutrogena.co.id/sites/neutrogena_id/files/artikel_2_2.jpg",
          url: "https://www.neutrogena.co.id/punya-kulit-kering-dan-kasar-ini-5-cara-untuk-merawatnya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "4 Kebiasaan Sederhana Untuk Merawat Kulit Kering",
          description: `Kulitmu tampak kusam, terasa kaku dan tertarik sehabis mandi, bahkan sesekali memiliki bercak kemerahan? Kalau iya, ini berarti kamu memiliki tipe kulit kering, di mana kandungan air dan minyak pada kulit lebih sedikit dari seharusnya. Tapi tenang saja, walau kulit kering memberikan sensasi yang tidak nyaman, kamu dapat merawatnya dan membuatnya menjadi lebih baik. Caranya mudah, kamu bisa mulai dengan menerapkan kebiasaan-kebiasaan sederhana yang baik untuk kulit kering.`,
          picture:
            "https://www.cetaphil.co.id/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites-Galderma-ID-Library/default/dwef4badf0/ARTICLE4sept_HEADER.jpg?sw=720",
          url: "https://www.cetaphil.co.id/tips-skincare/4-Kebiasaan-Sederhana-Untuk-Merawat-Kulit-Kering.html",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kulit Berminyak",
          description: `Pengertian kulit berminyak, tanda kulit berminyak, penyebab kulit berminyak, faktor risiko kulit berminyak, perawatan kulit berminyak, pencegahan kulit berminyak.`,
          picture:
            "https://cdn.hellosehat.com/wp-content/uploads/2019/05/kulit-berminyak.jpg?w=750&q=75",
          url: "https://hellosehat.com/penyakit-kulit/perawatan-kulit/kulit-berminyak/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Cuci Muka Saja Tak Cukup, Inilah Cara Merawat Kulit Berminyak",
          description: `Kulit berminyak membutuhkan perawatan yang tepat karena mencuci muka saja tidak cukup untuk menghilangkan minyak berlebih di wajah. Belum lagi, kulit berminyak rentan untuk berjerawat sehingga merawat kulit berminyak dengan cara yang tepat sangat penting untuk dilakukan.
          
          Kulit berminyak ditandai dengan kulit yang lengket, mengilap, dan mudah berjerawat. Kulit berminyak dapat disebabkan oleh beragam hal, seperti faktor genetik, perubahan hormon, atau stres.
          
          Bahkan, pola hidup tidak sehat, seperti kebiasaan merokok dan mengonsumsi minuman beralkohol juga dapat memicu produksi minyak berlebih dalam tubuh. Efeknya, kulit wajah dapat menjadi lebih berminyak.`,
          picture:
            "https://res.cloudinary.com/dk0z4ums3/image/upload/v1617591557/attached_image/solusi-wajah-bebas-kilap-meski-wajah-berminyak-0-alodokter.jpg",
          url: "https://www.alodokter.com/solusi-wajah-bebas-kilap-meski-wajah-berminyak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "7 Cara Mengatasi Minyak Berlebih pada Wajah yang Efektif",
          description: `Minyak berlebih pada wajah dapat menyumbat pori-pori yang memicu jerawat serta komedo. Itulah mengapa banyak orang inign tahu bagaimana cara mengatasi minyak berlebih pada wajah agar terhindar dari permasalahan kulit tersebut.
          
          Mengatasi minyak di wajah tidak dapat dilakukan dengan asal. Anda perlu mengetahui cara yang tepat agar tidak terjadi iritasi atau kulit kering. Lantas, bagaimana cara mengurangi minyak berlebih pada wajah? Simak ulasan lengkapnya di sini.`,
          picture:
            "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16740142360431524.webp",
          url: "https://www.siloamhospitals.com/informasi-siloam/artikel/cara-mengatasi-minyak-berlebih-pada-wajah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Cara Membersihkan dan Merawat Kulit Berminyak dan Rentan Berjerawat",
          description: `Sebagian besar dari kita bisa mengalami kondisi kulit berminyak, yang disebabkan oleh produksi sebum, atau minyak alami di kulit, yang berlebihan. Oleh karena itu penting untuk mempelajari cara merawat kulit berminyak, agar dapat menghindari timbulnya komedo hitam, komedo putih, dan gejala jerawat lainnya.`,
          picture:
            "https://res.cloudinary.com/dk0z4ums3/image/upload/v1702888249/attached_image/8-penyebab-muka-berminyak-yang-umum-terjadi.jpg",
          url: "https://www.larocheposay.co.id/article/cara-membersihkan-dan-merawat-kulit-berminyak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fakta atau Mitos Kulit Berminyak Lebih Rentan Berjerawat?",
          description: `Tipe kulit manusia pada dasarnya dapat dibagi beberapa jenis, mulai dari kulit kering, kulit berminyak, kulit kombinasi, dan juga kulit normal. Terlepas dari jenisnya, kulit di seluruh tubuh, terutama di wajah, sudah pasti ditutupi oleh minyak yang disebut sebagai sebum.
          
          Tahukah kamu, sebum diproduksi oleh kelenjar yang menempel di setiap pori-pori kulit. Setelah kelenjar menghasilkan sebum, minyak yang terproduksi secara perlahan-lahan akan naik ke pori-pori dan dilepaskan ke permukaan kulit. Faktanya, setiap individu menghasilkan jumlah sebum yang berbeda, karena hal inilah perbedaan jenis kulit terjadi.
          
          Meski semua jenis kulit memiliki kebaikan dan kurangannya masing-masing, beberapa  penelitian menunjukkan bahwa kulit berminyak adalah jenis kulit yang paling rentan mengalami jerawat. Menurut penelitian ilmiah, semakin berminyak kulit, semakin tinggi pula kemungkinan timbulnya jerawat.
          
          Simak sampai habis untuk mengetahui fakta selanjutnya!`,
          picture:
            "https://static.wixstatic.com/media/d55d2a_252c10b02a124e6689a3be53a0878918~mv2.jpg/v1/fill/w_522,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d55d2a_252c10b02a124e6689a3be53a0878918~mv2.jpg",
          url: "https://www.ioraclinic.com/post/fakta-atau-mitos-kulit-berminyak-lebih-rentan-berjerawat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mengenal pH Kulit Wajah Normal dan Cara Menjaganya",
          description: `Kadar pH kulit wajah merupakan salah satu faktor yang perlu diperhatikan untuk menjaga kesehatan dan kebersihan kulit secara optimal. Pasalnya, nilai pH kulit wajah yang tidak seimbang dapat memicu berbagai masalah kulit, seperti kulit kering, iritasi, hingga muncul jerawat.
          
          Maka dari itu, mari kenali kadar pH kulit wajah yang normal beserta cara menjaga keseimbangannya melalui ulasan di bawah ini.`,
          picture:
            "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16917199171877528.webp",
          url: "https://www.siloamhospitals.com/informasi-siloam/artikel/ph-kulit-wajah-normal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Memahami Jenis-Jenis Kulit sebelum Menentukan Perawatan",
          description: `Faktanya, kunci dalam perawatan kulit wajah bukan terletak pada mahal atau tidaknya produk perawatan yang kamu gunakan. Salah satu kuncinya adalah memahami kebutuhan kulit wajah, dan cara untuk mengetahui kebutuhan kulit wajah adalah dengan mengetahui jenis-jenis kulit wajah yang kamu miliki.
          
          Kamu pasti pernah mendengar tentang jenis-jenis kulit, seperti normal, berminyak, kering, kombinasi, atau sensitif. Nah, penting untuk mengetahui jenis kulit yang kamu miliki. Namun, jenis kulit juga bisa berubah seiring waktu. Misalnya, orang yang lebih muda lebih cenderung memiliki jenis kulit normal, daripada orang yang lebih tua.
          
          Selain itu, jenis-jenis kulit juga bergantung pada beberapa hal. Seperti seberapa banyak air di kulit karena ia memengaruhi kenyamanan dan elastisitasnya. Kemudian seberapa berminyaknya, karena ia yang memengaruhi kelembutannya dan seberapa sensitifnya kulit.`,
          picture:
            "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/09/29043056/Memahami-Jenis-jenis-Kulit-sebelum-Menentukan-Perawatan.jpg.webp",
          url: "https://www.halodoc.com/artikel/memahami-jenis-jenis-kulit-sebelum-menentukan-perawatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "4 Cara Mengetahui Jenis Kulit Wajah, Mudak Dilakukan!",
          description: `Mengetahui jenis kulit wajah merupakan hal yang penting dilakukan untuk menentukan produk perawatan kulit wajah yang tepat. Lantas, bagaimana cara mengetahui jenis kulit wajah yang mudah dilakukan?
          
          Mari kenali berbagai cara mengetahui jenis kulit wajah selengkapnya melalui pembahasan berikut ini.`,
          picture:
            "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16940721538375977.webp",
          url: "https://www.siloamhospitals.com/informasi-siloam/artikel/cara-mengetahui-jenis-kulit-wajah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Understanding skin - Skin types and conditions",
          description: `There are four basic types of healthy skin: normal, dry, oily and combination skin. Skin type is determined by genetics. The condition of our skin can, however, vary greatly according to the various internal and external factors it is subjected to.`,
          picture:
            "https://images-as.eucerin.com/~/media/eucerin/local/de/teaser/mainstage/trockene-haut-artikel-stages/eucerin-as-skin-types-00header.webp?rx=0&ry=60&rw=1440&rh=487&mw=1440&hash=EBB2FEBDA55A57C0465C74B17255D51E",
          url: "https://int.eucerin.com/about-skin/basic-skin-knowledge/skin-types",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kenali 5 Tipe Kulit Manusia Beserta Ciri-Ciri Umumnya",
          description: `Jauh sebelum memilih produk skincare, hal pertama yang perlu Anda lakukan adalah mengetahui apa tipe kulit Anda. Mengenal tipe kulit wajah maupun badan ternyata sangat penting sebab ini akan menentukan jenis perawatan dan produk yang Anda butuhkan.`,
          picture:
            "https://cdn.hellosehat.com/wp-content/uploads/2018/11/jenis-kulit-wajah.jpg?w=750&q=75",
          url: "https://hellosehat.com/penyakit-kulit/perawatan-kulit/tipe-kulit/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kenali Penyebab Munculnya Jerawat dan Cara Mengatasinya",
          description: `Jerawat yang membandel sering kali menganggu, terlebih jika tumbuh di area wajah sehingga dapat mempengaruhi penampilan. Keluhan mengenai tumbuhnya jerawat dapat dialami oleh siapa saja, walaupun lebih sering terjadi pada remaja masa pubertas. Sebenarnya, apa yang menjadi penyebab jerawat dan bagaimana cara mengatasinya simak ulasan berikut ini.`,
          picture:
            "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16832689976978657.webp",
          url: "https://www.siloamhospitals.com/informasi-siloam/artikel/kenali-penyebab-munculnya-jerawat-dan-cara-mengatasinya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "9 Perawatan Wajah Berjerawat yang Tepat agar Lekas Membaik",
          description: `Jerawat adalah masalah yang cukup umum terjadi pada setiap orang, terutama remaja dan orang dengan jenis kulit berminyak. Jerawat dapat disebabkan oleh berbagai faktor, seperti gaya hidup, makanan, atau salah memilih produk perawatan wajah (skincare). Perawatan wajah berjerawat penting dilakukan secara rutin agar masalah kulit ini bisa diatasi dan mencegahnya muncul kembali. Mari ketahui lebih lanjut seputar rangkaian perawatan wajah berjerawat yang bisa diterapkan secara rutin.`,
          picture:
            "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16868063141044832.webp",
          url: "https://www.siloamhospitals.com/informasi-siloam/artikel/perawatan-wajah-berjerawat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ketahui 7 Panduan Perawatan Tepat untuk Kulit Berjerawat",
          description: `Jerawat menjadi salah satu masalah kulit umum, dan dapat terjadi pada siapa saja. Ada berbagai langkah mudah untuk menghilangkannya. Salah satunya adalah rajin mencuci muka secara rutin.
          
          Membangun kebiasaan bersih adalah salah satu perawatan jerawat paling sederhana. Selain itu, tentu saja kamu perlu menjaga pola makan sehat serta menggunakan produk perawatan untuk kulit berjerawat.`,
          picture:
            "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/18044330/Perawatan-yang-Tepat-untuk-Kulit-Berjerawat-1.jpg.webp",
          url: "https://www.halodoc.com/artikel/ketahui-7-panduan-perawatan-tepat-untuk-kulit-berjerawat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Skincare Untuk Kulit Berjerawat: Cara Merawat Kulit Berjerawat Dengan Benar",
          description: `Saat ini kulit berjerawat merupakan salah satu masalah kulit yang sering dialami oleh banyak orang dear Guardian Angels. Jerawat bisa muncul di wajah, dada, punggung, dan bahkan di bagian kulit yang lainnya. Penyebab dari jerawat sendiri itu bermacam-macam, mulai dari faktor genetik, hormon, makanan, hingga kebersihan kulit yang kurang terjaga. Nah, oleh karena itu, perawatan yang tepat sangat penting dalam merawat kulit yang berjerawat agar nantinya jerawat kamu tidak semakin parah dan bisa membaik dengan waktu yang relatif singkat. Pada artikel ini, kami akan membahas tentang skincare untuk kulit berjerawat yang dapat membantu merawat kulit berjerawat dengan benar, Yuk baca selengkapnya!`,
          picture:
            "https://image-cdn.medkomtek.com/rgZnQx4-0v7FItklD60u9bTvbSE=/673x373/smart/filters:quality(75):strip_icc():format(jpeg)/klikdokter-media-buckets/medias/1736302/original/002294700_1507711713-Jerawat.jpg",
          url: "https://guardianindonesia.co.id/blog/post/skincare-untuk-kulit-berjerawat-cara-merawat-kulit-berjerawat-dengan-benar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mengenal Berbagai Pilihan Facial Treatment untuk Kulit Berjerawat",
          description: `Apakah Anda pernah bingung memilih facial treatment yang tepat untuk kulit berjerawat? Banyak orang berjuang dengan jerawat dan sering kali merasa kewalahan dengan berbagai pilihan perawatan wajah yang tersedia. Dari perawatan medis hingga solusi alami, setiap jenis memiliki pendekatan yang unik dalam mengatasi masalah kulit berjerawat. Artikel ini bertujuan untuk menyediakan panduan komprehensif tentang berbagai jenis facial treatment untuk kulit berjerawat, membantu Anda memahami manfaat dan kegunaan masing-masing metode agar dapat membuat keputusan yang tepat sesuai dengan kebutuhan dan kondisi kulit Anda.`,
          picture:
            "https://miracle-clinic.com/uploads/news/large-OdKbw-s60LlFgynodMnZd52_B2qtgnxX.jpg",
          url: "https://www.miracle-clinic.com/news/read/mengenal-berbagai-pilihan-facial-treatment-untuk-kulit-berjerawat",
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
