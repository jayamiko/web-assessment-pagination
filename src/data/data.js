export const BRAND = {
  Apple: 'Apple',
  Lenovo: 'Lenovo',
  Axioo: 'Axioo',
  ASUS: 'ASUS',
  Microsoft: 'Microsoft',
};

export const brands = [
  {
    id: 1,
    brand_name: BRAND.Apple,
  },
  {
    id: 2,
    brand_name: BRAND.Lenovo,
  },
  {
    id: 3,
    brand_name: BRAND.Axioo,
  },
  {
    id: 4,
    brand_name: BRAND.Lenovo,
  },
  {
    id: 5,
    brand_name: BRAND.Microsoft,
  },
];

export const products = [
  {
    id: 1,
    name: 'Macbook Pro M1 2020 Touchbar',
    sold: 12,
    stock: 5,
    storage: 128,
    brand_id: 1,
    price: 14999000,
    description:
      'Apple memperkenalkan MacBook Pro 13 inci dengan dua port Thunderbolt berdasarkan sistem Apple M1 pada sebuah chip, diluncurkan bersamaan dengan MacBook Air dan Mac Mini yang diperbarui sebagai Mac pertama dengan jajaran produk baru berbasis ARM khusus Apple.',
    image: {
      url: 'https://asset.kompas.com/crops/ELqQOvrDHnZimhcDDdzjGDkmHV4=/215x133:1348x888/750x500/data/photo/2021/01/18/6004ff2047534.jpg',
    },
  },
  {
    id: 2,
    name: 'ASUS ROG Zephyrus G14 Ryzen 5',
    sold: 2,
    stock: 48,
    storage: 128,
    brand_id: 4,
    price: 23999000,
    description:
      'Laptop Gaming Kencang, Ringan 1.5 KG, Irit Baterai. Laptop gaming unik ini adalah ASUS ROG Zephyrus G14 keluaran tahun 2024. Sudah menjadi tradisi kalau setiap tahunnya ASUS mengeluarkan penerus dari seri Laptop Gaming 14 Inch mereka.',
    image: {
      url: 'https://rog.asus.com/media/170728681833.jpg',
    },
  },
  {
    id: 3,
    name: 'Lenovo Ideapad Slim 3i',
    sold: 80,
    stock: 102,
    storage: 128,
    brand_id: 2,
    price: 5400000,
    description:
      'Lenovo Ideapad Slim 3i yang menawarkan kombinasi sempurna antara desain modern dan mobilitas, ideal untuk mahasiswa. Selain ringan, performanya pun responsif dan cocok untuk multitasking mengerjakan tugas kuliah sehari-hari.',
    image: {
      url: 'https://glints.com/id/lowongan/wp-content/uploads/2024/02/Lenovo-Ideapad-Slim-3i.webp',
    },
  },
  {
    id: 4,
    name: 'ASUS VivoBook Go 14',
    sold: 66,
    stock: 44,
    storage: 256,
    brand_id: 4,
    price: 6299000,
    description:
      'Desain ASUS VivoBook 14 A416JA tampak minimalis dengan logo ASUS yang ditempatkan pada bagian cover laptopnya. Meski demikian, finishing doff yang dipakai pada permukaan cover casingnya sudah cukup mampu tampilkan kesan mewah.',
    image: {
      url: 'https://dlcdnwebimgs.asus.com/files/media/7d810b95-0ef3-45e5-b544-2e4fa323f67e/v1/features/images/large/2x/s1/main.webp',
    },
  },
  {
    id: 5,
    name: 'ASUS Vivobook 14X M1403',
    sold: 10,
    stock: 0,
    storage: 512,
    brand_id: 4,
    price: 9999000,
    description:
      'Vivobook 14X hadir dengan webcam beresolusi HD 720p. Webcam ini menggunakan teknologi ASUS 3D Noise Reduction (3DNR) yang diklaim dapat meningkatkan kejernihan secara signifikan dan mengurangi noise pada gambar. Kamera ini juga dilengkapi dengan webcam shield fisik untuk menjaga privasi pengguna.',
    image: {
      url: 'https://www.yangcanggih.com/wp-content/uploads/2023/02/ASUS-Vivobook-14X-2.jpg',
    },
  },
  {
    id: 6,
    name: 'Macbook Pro M2 2022',
    sold: 50,
    stock: 50,
    storage: 256,
    brand_id: 1,
    price: 17999000,
    description:
      'MacBook Pro 13 inci lebih andal dari sebelumnya. Bertenaga super berkat chip M2 generasi berikutnya, MacBook Pro ini merupakan laptop pro Apple yang paling portabel, dengan kekuatan baterai hingga 20 jam',
    image: {
      url: 'https://selular.id/wp-content/uploads/2022/07/macbook-pro-696x392-1.jpg',
    },
  },
  {
    id: 7,
    name: 'Axioo Pongo Studio',
    sold: 200,
    stock: 175,
    storage: 64,
    brand_id: 3,
    price: 15699000,
    description:
      'Axioo secara resmi menghadirkan laptop gaming terbarunya yakni Pongo Studio. Ini menjadi laptop paling kencang dalam lini produk Axioo Pongo berkat spesifikasi yang diberikan yakni Intel Core i9-13900H dan NVIDIA GeForce RTX 4070. Tak cuma itu, Axioo Pongo Studio ini juga menjadi laptop lokal pertama sudah mendapatkan sertifikasi NVIDIA Studio.',
    image: {
      url: 'https://y6a2n7m3.rocketcdn.me/wp-content/uploads/2023/08/Axioo-Pongo-960-201-860x484.jpg',
    },
  },
  {
    id: 8,
    name: 'Microsoft Surface Pro 9',
    sold: 44,
    stock: 5,
    storage: 64,
    brand_id: 5,
    price: 15699000,
    description:
      'Microsoft Surface Pro 9 merupakan laptop 2 in 1 yang dapat digunakan sebagai laptop sekaligus tablet yang fleksibel. Laptop ini memiliki prosesor Intel Core i5 dan i7, Intel Iris Xe Graphics, layar berukuran 13 inch dengan 10-point multi-touch dan support sinyal 5G.',
    image: {
      url: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/5/5eafb0fd-060c-445b-aa5a-66a13b8666a1.jpg',
    },
  },
  {
    id: 9,
    name: 'Asus Vivobook Flip 14',
    sold: 100,
    stock: 23,
    storage: 128,
    brand_id: 4,
    price: 17999000,
    description:
      'ASUS VivoBook Flip 14 is back — with a bold new look to get your pulse racing. This is a convertible laptop that’s full of personality, sporting a sleek Indie Black or Transparent Silver finish and a color-blocked Enter key with yellow edges and text.',
    image: {
      url: 'https://akcdn.detik.net.id/visual/2021/04/01/asus-vivobook-flip-14-2_169.jpeg?w=650',
    },
  },
];
