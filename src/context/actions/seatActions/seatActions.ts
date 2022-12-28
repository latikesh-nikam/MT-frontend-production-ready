import { SEAT_DATA } from '../../../constants/seat';
import { ISearchData } from '../../reducers/dashboardReducer/dashboardReducer.types';

export const seatDataAction = (data: ISearchData) => ({
  type: SEAT_DATA,
  payload: data,
});
