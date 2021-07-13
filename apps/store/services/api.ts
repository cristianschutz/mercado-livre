import Axios from 'axios';

const baseURL = process.env.NODE_ENV==='development' ? 'http://localhost:3333' : 'http://localhost:3333';

const api = Axios.create({
  baseURL
});

export default api;
