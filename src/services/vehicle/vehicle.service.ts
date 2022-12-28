import { apiRoutes } from '../../constants/apiRoutes';
import { axiosInstance } from '../axios.interceptors';

export const vehicleBooking = async (
  passengerData: any,
  vehicleId: string,
  vehicleNumber: string,
) => {
  console.log(passengerData);
  try {
    const { data } = await axiosInstance.put(
      `${apiRoutes.vehicleBooking}${vehicleId}/${vehicleNumber}`,
      passengerData,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
