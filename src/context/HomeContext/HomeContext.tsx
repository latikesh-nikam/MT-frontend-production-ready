import { createContext, useReducer } from 'react';
import {
  homeReducer,
  HOME_ACTIONS_MAP,
} from '../../reducers/homeReducer/homeReducer';
import { postData } from '../../services/axios.instance';
import {
  IHomeContext,
  IHomeContextProps,
  IHomeState,
} from './homeContext.types';

export const HomeContext = createContext<IHomeContext | null>(null);

const HomeProvider = ({ children }: IHomeContextProps) => {
  const initialState: IHomeState = {
    searchData: {},
    searchFormData: {
      from: '',
      to: '',
      date: new Date(),
    },
    filterData: {
      isFiltered: false,
      busType: false,
      departure: '',
      price: [0, 100],
      drop: '',
    },
  };

  const [homeState, homeDispatch] = useReducer(homeReducer, initialState);

  const getSearchResults = async (url: string,data:any) => {
    console.log(data)
    try {
      const response = await postData(url, data);
      console.log(response)
      homeDispatch({ type: HOME_ACTIONS_MAP.SEARCH_DATA, payload: response });
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <HomeContext.Provider value={{ homeState, homeDispatch, getSearchResults }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
