import axios from 'axios';
import utility from '../utils/utility';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(config => {
  const token = utility.getStore('acessToken');
  config.headers = {
    'Content-Type': 'application/json',
    authorization: token || '',
  };
  return config;
});

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response) {
//       if (error.response.status === 401) {
//         // Do something, call refreshToken() request for example;
//         // return a request
//         return apiUrl(config);
//       }

//     }

//     return Promise.reject(error);
//   }
// );

export const getData = async (url: string) => {
  try {
    const { data } = await axiosInstance.get(`${url}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const postData = async (url: string, formData: any) => {
  try {
    const { data } = await axiosInstance.post(`${url}`, formData);
    return data;
  } catch (error) {
    throw error;
  }
};

