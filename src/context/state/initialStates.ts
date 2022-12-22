import dashboardReducer from '../reducers/dashboardReducer/dashboardReducer';
import toasterReducer from '../reducers/toasterReducer/toasterReducer';
import { IInitialState } from './initialState.types';

export const initialState: IInitialState = {
  dashboardState: dashboardReducer.INITIAL_STATE,
  toasterState: toasterReducer.INITIAL_STATE,
};
