import http from '../utils/http.js';

const fetchImages = async () => http
  .get('/images/json')
  .then((response) => {
    if (!response) {
      return null
    }
    return response.data
  });

const removeImage = async (id) => http
  .delete(`/images/${id}?force=1`)
  .then((response) => {
    if (!response) {
      return null
    }
    return response.data
  });

export {
  fetchImages,
  removeImage,
}
