import {
  FILTER_FORM_DATA,
  SEARCH_DATA,
  SEARCH_FORM_DATA,
  PAGE_NUMBER,
  SORT_DATA,
} from '../../../constants/dashboardAction.constants';
import { IDashboardAction, IDashboardState } from './dashboardReducer.types';

export const HOME_ACTIONS_MAP = {
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_FORM_DATA: 'SEARCH_FORM_DATA',
  FILTER_FORM_DATA: 'FILTER_FORM_DATA',
  SORT_DATA: 'SORT_DATA',
  PAGE_NUMBER: 'PAGE_NUMBER',
};

const INITIAL_STATE: IDashboardState = {
  searchData: {
    data: [],
    nextPage: false,
    previousPage: false,
    totoalRecord: 0,
  },
  searchFormData: {
    from: '',
    to: '',
    date: new Date(),
  },
  filterData: {
    isFiltered: false,
    vehicleClassType: [],
    vehicleType: '',
    departure: '',
    price: [0, 100],
    drop: '',
  },
  sortData: {
    isSorted: false,
    fixedFare: '',
    ratings: [],
  },
  pageNumber: 0,
};

const dashboardReducer = (
  state: IDashboardState,
  { type, payload }: IDashboardAction,
) => {
  switch (type) {
    case SEARCH_DATA: {
      return { ...state, searchData: payload };
    }
    case SEARCH_FORM_DATA: {
      return { ...state, searchFormData: payload };
    }
    case FILTER_FORM_DATA: {
      return { ...state, filterData: payload };
    }
    case SORT_DATA: {
      return { ...state, sortData: payload };
    }
    case PAGE_NUMBER: {
      return { ...state, pageNumber: payload };
    }
    default: {
      return state;
    }
  }
};

dashboardReducer.INITIAL_STATE = INITIAL_STATE;
export default dashboardReducer;
