import { IHomeState } from '../context/HomeContext/homeContext.types';

export interface IHomeAction {
  type: string;
  payload?: any;
}

const HOME_ACTIONS_MAP = {
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_FORM_DATA: 'SEARCH_FORM_DATA',
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
    default: {
      return state;
    }
  }
};
