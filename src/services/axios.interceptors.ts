import axios from 'axios';
import { STATUS_CODE } from '../constants/apiStatusCode';
import utility from '../utils/utility';
import { refreshAccessToken } from './auth/auth.service';

const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
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

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response) {
      if (
        error.response.status === STATUS_CODE.TOKEN_EXPRIRED &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        const accessToken = await refreshAccessToken();
        axios.defaults.headers.common['authorization'] = accessToken;

        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);
