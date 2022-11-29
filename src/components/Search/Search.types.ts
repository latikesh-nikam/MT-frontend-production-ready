export interface ISearchInput {
  from: string;
  to: string;
  date: Date;
  adults: number;
  children: number;
}

export interface ISearchProps {
  handleSearch: (data: ISearchInput) => void;
}
