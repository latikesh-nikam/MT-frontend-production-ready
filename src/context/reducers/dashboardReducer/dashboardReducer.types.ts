import { IFilterInput } from "../../../components/Filter/filter.types";

export interface IDashboardAction {
  type: string;
  payload: any;
}
export interface ISearchFormState {
  from: string;
  to: string;
  date: Date;
}

export interface ISearchData {
  data: any[];
  nextPage: boolean;
  previousPage: boolean;
  totoalRecord: number;
}

export interface IFilterDataState extends IFilterInput {
  isFiltered: boolean;
}

export interface ISortDataState {
  isSorted: boolean;
  fixedFare: string;
  ratings: string[];
}

export interface IDashboardState {
  searchData: ISearchData;
  searchFormData: ISearchFormState;
  filterData: IFilterDataState;
  sortData: ISortDataState;
  pageNumber: number;
}
