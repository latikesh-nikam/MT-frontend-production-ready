export interface ISearchInput {
  from: string;
  to: string;
  date: Date;
 
}

export interface ISearchProps {
  handleSearch: (data: ISearchInput) => void;
}

export interface IAllStation {
  _id: string;
  stationName: string;
}


