export const bookingsDetailsData = {
  totalFare: 3000,
  from: 'Mumbai',
  to: 'Nagpur',
  departureDate: new Date(2023, 1, 25),
  departureTime: '18.30',
  arrivalTime: '9:00',
  arrivalDate: new Date(2023, 1, 26),
  bookedBy: 'Shruti Tharmia',
  passengerDetails: [
    {
      passengerName: 'shruti',
      passengerGender: 'female',
      passengerAge: '21',
      passengerSeat: 'U9',
      userId: '63a3fe92d0baec9bfc6ff115',
      email: 'amay@gmail.com',
      phoneNumber: '8766288401',
    },
    {
      passengerName: 'abhay',
      passengerGender: 'male',
      passengerAge: '21',
      passengerSeat: 'L4',
      userId: '63a3fe92d0baec9bfc6ff115',
      email: 'amay@gmail.com',
      phoneNumber: '8766288401',
    },
    // {
    //   passengerName: 'amay',
    //   passengerGender: 'male',
    //   passengerAge: '22',
    //   passengerSeat: 'L1',
    //   userId: '63a3fe92d0baec9bfc6ff115',
    //   email: 'amay@gmail.com',
    //   phoneNumber: '8766288401',
    // },
  ],
};

export const tableHeaders = (localString: any) => [
  { id: 'passengerName', displayName: localString?.name },
  { id: 'passengerGender', displayName: localString?.gender },
  { id: 'passengerAge', displayName: localString?.age },
  { id: 'passengerSeat', displayName: localString?.seatNo },
];
