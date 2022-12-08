import { Dispatch } from 'react';
import { PropsWithChildren } from 'react';
import { IHomeAction } from '../../reducers/homeReducer/homeReducer.types';

export interface IHomeContextProps extends PropsWithChildren {}

export interface IHomeState {
  searchData: any;
  searchFormData: {
    from: string;
    to: string;
    date: Date;
  };
  filterData: {
    isFiltered: boolean;
    busType: any;
    departure: string;
    price: number[];
    drop:string;
  };
}

export interface IHomeContext {
  homeState: IHomeState;
  homeDispatch: Dispatch<IHomeAction>;
  getSearchResults: (url:string, data:any)=>any;
}
