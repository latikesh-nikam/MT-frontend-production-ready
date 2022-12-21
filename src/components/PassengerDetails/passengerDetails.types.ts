export type IPassengerDetailsProps = {
  name?: string;
  email: string;
  phone: number | string;
  gender?: string;
  age?: string;
  seats: [];
};

export type IPassengerCountProps = {
  passengerCount: IPassengerDetails[];
};

export type IPassengerDetails = {
  seatNo: number;
  deck: string;
  bookedGender: string;
  seatFare: number;
  status: string;
};

export type IFieldArrayProps = {
  name?: string;
};

export type IPassengerDetailsFormProps = {
  name: string;
  seatNo: number;
  age: string | number;
  gender: string;
};
