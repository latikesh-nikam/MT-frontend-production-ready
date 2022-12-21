import WifiIcon from '@mui/icons-material/Wifi';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

export const iconMap: {
  [key: string]: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
} = {
  WiFi: WifiIcon,
  'Reading Light': WbIncandescentOutlinedIcon,
  'Charging Point': PowerOutlinedIcon,
  'Water Bottle': LiquorOutlinedIcon,
};

export const amenities = [
  'Wifi',
  'Reading light',
  'Charging Point',
  'Water Bottle',
  'Wifi',
  'Reading light',
];

export const searchResults = [
  {
    vehicleClassType: 'NON_AC_SEATER',
    vehicleNumber: '2500',
    station: [
      {
        sourceName: 'pune',
        stationId: 0,
        sourceDepartureTime: '09:00',
        sourceArrivalTime: '08:45',
        sourceDistance: '0',
        sourceDuration: '0',
        destinationDepartureTime: '18:00',
        destinationArrivalTime: '18:15',
        destinationDistance: '160',
        destinationDuration: '5',
      },
      {
        sourceName: 'lonavala',
        stationId: 1,
        sourceDepartureTime: '11:00',
        sourceArrivalTime: '10:45',
        sourceDuration: '2',
        sourceDistance: '70',
        destinationDepartureTime: '16:00',
        destinationArrivalTime: '15:45',
        destinationDistance: '0',
        destinationDuration: '0',
      },
      {
        sourceName: 'panvel',
        stationId: 2,
        sourceDepartureTime: '12:30',
        sourceArrivalTime: '12:15',
        sourceDuration: '3.5',
        sourceDistance: '120',
        destinationDepartureTime: '16:00',
        destinationArrivalTime: '15:45',
        destinationDistance: '40',
        destinationDuration: '1',
      },
      {
        sourceName: 'mumbai',
        stationId: 3,
        sourceDepartureTime: '13:30',
        sourceArrivalTime: '13:15',
        sourceDuration: '4.5',
        sourceDistance: '160',
        destinationDepartureTime: '15:00',
        destinationArrivalTime: '14:45',
        destinationDistance: '0',
        destinationDuration: '0',
      },
    ],
    TotalAvailableSeat: '40',
    vehicleName: 'express',
    dayOnWhichItRuns: [
      {
        day1: 'monday',
        day2: 'tuesday',
        day3: 'wednessday',
        day4: 'thrusday',
        day5: 'friday',
        day6: 'saturday',
        day7: 'sunday',
      },
    ],
    totalDistance: 160,
    totalTravelTime: 4.5,
    totalFare: 960,
  },
];
