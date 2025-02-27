export const books = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    price: 333,
    title: `Книга ${i + 1}`,
    author: 'Лев Толстой',
    image: `https://ir-7.ozone.ru/s3/multimedia-j/wc1000/6887843875.jpg`,
  }));

export const recentlyViewed = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    price: 333,
    title: `Книга ${i + 1}`,
    author: 'Лев Толстой',
    image: `https://ir-7.ozone.ru/s3/multimedia-j/wc1000/6887843875.jpg`,
  }));