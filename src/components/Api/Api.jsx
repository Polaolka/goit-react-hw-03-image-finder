// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// Pixabay API підтримує пагінацію, за замовчуванням параметр page дорівнює 1. Нехай у відповіді надходить по 12 об'єктів, встановлено в параметрі per_page. Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1.
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
// Your API key: 33856079-07df6d61f1845998135abb1f8
// https://pixabay.com/api/?key=33856079-07df6d61f1845998135abb1f8&q=yellow+flowers&image_type=photo

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33856079-07df6d61f1845998135abb1f8';
const PARAMS = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export async function getImages(query, page) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}`;
  try {
    const response = await axios.get(`${url}`, {
      params: PARAMS,
    });
    console.log(response);
    const totalImg = response.data.totalHits;
    const images = response.data.hits;
    const totalPage = Math.ceil(response.data.totalHits / PARAMS.per_page);
    return { images, totalImg, totalPage };
  } catch (error) {console.log(error.message);}
}
