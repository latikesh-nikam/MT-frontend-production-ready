import { apiRoutes } from '../../constants/apiRoutes';
import { ISearchData } from '../../context/reducers/dashboardReducer/dashboardReducer.types';
import { axiosInstance } from '../axios.interceptors';

interface IData {
  data: ISearchData;
}

export const searchApi = async (info: any, pageNumber: number) => {
  try {
    const { data }: IData = await axiosInstance.post(
      `${apiRoutes.search}${pageNumber}`,
      info,
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
