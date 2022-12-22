import { ISignInInput } from '../../components/SignIn/signIn.types';
import { apiRoutes } from '../../constants/apiRoutes';
import utility from '../../utils/utility';
import { axiosInstance } from '../axios.interceptors';

export const signIn = async (signInData: ISignInInput) => {
  try {
    const { data } = await axiosInstance.post(apiRoutes.logIn, signInData);
    utility.setStore('accessToken', data.access_token);
    utility.setStore('refreshToken', data.refresh_token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const { data } = await axiosInstance.get(apiRoutes.logout);
    utility.setStore('accessToken', '');
    utility.setStore('refreshToken', '');
    return data;
  } catch (error) {
    throw error;
  }
};

export const refreshAccessToken = async () => {
  const { data } = await axiosInstance.post(apiRoutes.refresh, {
    refresh: utility.getStore('refreshToken'),
  });
  console.log(data);
  return data;
};
