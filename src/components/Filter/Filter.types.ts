export interface IFilterInput {
  busType: any;
  departure: string;
  price: number[];
  drop: string;
}

export interface IFilterProps {
  handleFilter: (data: IFilterInput) => void;
}
