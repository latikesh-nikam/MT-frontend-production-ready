import { createContext, useReducer } from 'react';
import { homeReducer } from '../../reducers/homeReducer';
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
      adults: 1,
      children: 0,
      date: new Date(),
    },
  };

  const [homeState, homeDispatch] = useReducer(homeReducer, initialState);

  return (
    <HomeContext.Provider value={{ homeState, homeDispatch }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
