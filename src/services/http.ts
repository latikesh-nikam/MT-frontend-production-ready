import axios from 'axios';
import utility from '../utils/utility';
const baseURL = 'http://localhost:3000/';

const apiUrl = axios.create({
  baseURL: baseURL,
});

apiUrl.interceptors.request.use(config => {
  const token = utility.getStore('token');
  config.headers = {
    'Content-Type': 'application/json',
    authorization: token || '',
  };
  return config;
});

export default apiUrl;
