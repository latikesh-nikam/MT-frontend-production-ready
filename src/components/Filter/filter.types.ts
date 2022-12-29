export interface IFilterInput {
  vehicleClassType: string[];
  vehicleType:string,
  departure: string;
  price: number[];
  drop: string;
}

export interface IFilterProps {
  navigateTo?:string
}
