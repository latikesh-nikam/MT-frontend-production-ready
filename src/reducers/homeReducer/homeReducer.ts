import { IHomeState } from '../../context/HomeContext/homeContext.types';
import { IHomeAction } from './homeReducer.types';

export const HOME_ACTIONS_MAP = {
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_FORM_DATA: 'SEARCH_FORM_DATA',
  FILTER_FORM_DATA: "FILTER_FORM_DATA"
};

export const homeReducer = (
  state: IHomeState,
  { type, payload }: IHomeAction,
) => {
  switch (type) {
    case HOME_ACTIONS_MAP.SEARCH_DATA: {
      return { ...state, searchData: payload };
    }
    case HOME_ACTIONS_MAP.SEARCH_FORM_DATA: {
      return { ...state, searchFormData: payload };
    }

    case HOME_ACTIONS_MAP.FILTER_FORM_DATA:{
      return {...state,filterData:payload}
    }
    default: {
      return state;
    }
  }
};
