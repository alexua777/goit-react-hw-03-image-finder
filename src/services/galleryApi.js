import axios from 'axios';
const KEY = '4183861-f12117fb478e4048342d80c94'

const fetchGalleryWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(`https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${page}?image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
};

export default {
  fetchGalleryWithQuery,
};