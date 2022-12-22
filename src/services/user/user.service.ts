import { apiRoutes } from '../../constants/apiRoutes';
import { axiosInstance } from '../axios.interceptors';

export const fetchAllStations = async () => {
  try {
    const { data } = await axiosInstance.get(apiRoutes.vehicle);
    return data;
  } catch (error) {
    throw error;
  }
};
