import dashboardReducer from '../reducers/dashboardReducer/dashboardReducer';
import seatReducer from '../reducers/seatReducers/seatReducer';
import toasterReducer from '../reducers/toasterReducer/toasterReducer';
import { IInitialState } from './initialState.types';

export const initialState: IInitialState = {
  dashboardState: dashboardReducer.INITIAL_STATE,
  toasterState: toasterReducer.INITIAL_STATE,
  seatState: seatReducer.INITIAL_STATE,
};
