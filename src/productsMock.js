export let articles = [
  {
    id: 1,
    title: "Pintura 1",
    price: 12432,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1709093366/Art/PORTRAITS/DAISY_1_md0wtf.jpg",
    stock: 12,
    category: "portraits",
  },
  {
    id: 2,
    title: "Pintura 2",
    price: 14500,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991943/Art/PORTRAITS/Bella_ew2n1d.jpg",
    stock: 8,
    category: "portraits",
  },
  {
    id: 3,
    title: "Pintura 3",
    price: 19000,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991945/Art/PORTRAITS/Lilith_1_bycs8a.jpg",
    stock: 6,
    category: "portraits",
  },
  {
    id: 4,
    title: "Pintura 4",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991942/Art/PORTRAITS/Arwen_ytzumv.jpg",
    stock: 9,
    category: "portraits",
  },
  {
    id: 5,
    title: "Pintura 5",
    price: 12432,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991947/Art/PORTRAITS/Rowan_eobzas.jpg",
    stock: 11,
    category: "portraits",
  },
  {
    id: 6,
    title: "Pintura Oleo 1",
    price: 14500,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991942/Art/OIL%20PAINTING%20ON%20GLASS/OIL_PAINTING_ON_GLASS_wqsszk.jpg",
    stock: 2,
    category: "oil painting on glass",
  },
  {
    id: 7,
    title: "Pintura Oleo 2",
    price: 19000,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991941/Art/OIL%20PAINTING%20ON%20GLASS/OIL_PAINTING_ON_GLASS_4_vkmcvo.jpg",
    stock: 4,
    category: "oil painting on glass",
  },
  {
    id: 8,
    title: "Pintura Oleo 3",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991941/Art/OIL%20PAINTING%20ON%20GLASS/OIL_PAINTING_ON_GLASS_3_mov6j5.jpg",
    stock: 5,
    category: "oil painting on glass",
  },
  {
    id: 9,
    title: "Pintura Oleo 4 ",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991940/Art/OIL%20PAINTING%20ON%20GLASS/OIL_PAINTING_ON_GLASS_1_e8ngc6.jpg",
    stock: 13,
    category: "oil painting on glass",
  },
  {
    id: 10,
    title: "Pintura Details 1 ",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991939/Art/DETAILS/20240225-160119_gtgw2u.jpg",
    stock: 10,
    category: "details",
  },
  {
    id: 11,
    title: "Pintura Details 2 ",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991938/Art/DETAILS/20240225-160434_ze1d0y.jpg",
    stock: 7,
    category: "details",
  },
  {
    id: 12,
    title: "Pintura Details 3",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991938/Art/DETAILS/20240225-160647_tpm1s4.jpg",
    stock: 5,
    category: "details",
  },
  {
    id: 13,
    title: "Pintura Details 4",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991937/Art/DETAILS/20240225-160712_k8rg3l.jpg",
    stock: 14,
    category: "details",
  },
  {
    id: 14,
    title: "Pintura Details 5",
    price: 17800,
    description: "",
    img: "https://res.cloudinary.com/dlzprr6nc/image/upload/v1708991937/Art/DETAILS/20240225-160830_cxppob.jpg",
    stock: 1,
    category: "details",
  },
];

export const getArticles = () => {
  return new Promise((resolve, reject) => {
    if (articles.length > 0) {
      setTimeout(() => {
        resolve(articles);
      }, 1000);
    } else {
      reject("No hay articulos existentes");
    }
  });
};

export const getArticle = (id) => {
  return new Promise((resolve, reject) => {
    if (articles.length > 0) {
      const article = articles.find((item) => item.id === id);

      setTimeout(() => {
        if (article) {
          resolve(article);
        } else {
          reject(`No existe el articulo con el id ${id}`);
        }
      }, 1000);
    } else {
      reject("No se encuentra el articulo");
    }
  });
};
