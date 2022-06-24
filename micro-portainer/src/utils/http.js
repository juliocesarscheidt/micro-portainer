import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
  timeout: 15000, // 15 seconds
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use((config) => {
  return config;
});

export default http;
