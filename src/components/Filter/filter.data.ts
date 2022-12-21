import { IFilterInput } from "./filter.types";

export const busTypeOptions = [
  { label: 'sleeper', value: 'SLEEPER' },
  { label: 'seater', value: 'SEATER' },
];

export const vehicleTypeOptions = [
  { label: 'ac', value: 'AC' },
  { label: 'non-ac', value: 'NONAC' },
]

export const departureOptions = [
  { label: 'Early Morning (before 6 AM)', value: '6' },
  { label: 'Morning (6 AM - 12 PM)', value: '6-12' },
  { label: 'Afternoon (12 PM - 4 PM)', value: '12-16' },
  { label: 'Evening (4 PM - 6 PM)', value: '16-18' },
  { label: 'Night (after 6 PM)', value: '18' },
];

export const sliderData = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 25,
    label: '500',
  },
  {
    value: 50,
    label: '1000',
  },
  {
    value: 75,
    label: '1500',
  },
  {
    value: 100,
    label: '2000+',
  },
];

export const filterInitialState:IFilterInput ={
  departure: '',
  drop: '',
  price: [0, 100],
  vehicleClassType: [],
  vehicleType: '',
}
