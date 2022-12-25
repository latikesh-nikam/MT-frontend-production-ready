import { IDashboardState } from '../reducers/dashboardReducer/dashboardReducer.types';
import { ISeatState } from '../reducers/seatReducers/seatReducer.types';
import { IToasterState } from '../reducers/toasterReducer/toasterReducer.types';

export interface IInitialState {
  dashboardState: IDashboardState;
  toasterState: IToasterState;
  seatState: ISeatState;
}
