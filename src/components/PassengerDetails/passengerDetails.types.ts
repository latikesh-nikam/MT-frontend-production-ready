export type IPassengerDetailsProps = {
  name?: string;
  email: string;
  phoneNumber: number | string;
  gender?: string;
  age?: string;
  passengerDetails: [];
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
  passengerName: string;
  passengerSeat: number;
  passengerAge: string | number;
  passengerGender: string;
  email?: string;
  phoneNumber?: string | number;
  userId?: string;
};
