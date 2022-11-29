import axios from 'axios';
import utility from '../utils/utility';
const baseURL = 'http://192.168.3.176:3200/';
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
export const getData = async (url: string) => {
  try {
    const { data } = await apiUrl.get(`${url}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (url: string, formData: any) => {
  try {
    const { data } = await apiUrl.post(`${url}`, formData);
    return data;
  } catch (error) {
    throw error;
  }
};
