import { Dispatch } from 'react';
import { PropsWithChildren } from 'react';
import {
  IDashboardAction,
  IDashboardState,
} from '../reducers/dashboardReducer/dashboardReducer.types';
import { IInitialState } from '../state/initialState.types';

export interface IStoreProviderProps extends PropsWithChildren {}

export interface IStoreContext {
  state: IInitialState;
  dispatch: Dispatch<IDashboardAction>;
  getSearchResults: (data: any) => any;
  resetState: () => void;
}
