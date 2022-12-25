import { SEAT_DATA } from '../../../constants/seat';
import { ISearchData } from '../../reducers/dashboardReducer/dashboardReducer.types';

export const searchDataAction = (data: ISearchData) => ({
  type: SEAT_DATA,
  payload: data,
});
