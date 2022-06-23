import http from '../utils/http.js';

const fetchContainers = async () => http
  .get('/containers/json')
  .then((response) => {
    if (!response) {
      return null
    }
    return response.data
  });

const pauseUnpauseContainer = async (id, op) => http
  .post(`/containers/${id}/${op}`)
  .then((response) => {
    if (!response) {
      return null
    }
    return response.data
  });

const removeContainer = async (id) => http
  .delete(`/containers/${id}?force=1`)
  .then((response) => {
    if (!response) {
      return null
    }
    return response.data
  });

export {
  fetchContainers,
  pauseUnpauseContainer,
  removeContainer,
}
