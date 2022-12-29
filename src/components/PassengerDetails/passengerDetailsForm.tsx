import { Fragment } from 'react';
import { useContext } from 'react';

import { useFieldArray } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';

import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IPassengerDetailsProps } from './passengerDetails.types';
import { IPassengerDetailsFormProps } from './passengerDetails.types';
import { IPassengerCountProps } from './passengerDetails.types';
import { IPassengerDetails } from './passengerDetails.types';

import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import FormInput from '../FormInput/formInput';
import RadioInput from '../RadioInput/radioInput';

import { Parent } from './passengerDetails.style';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import utility from '../../utils/utility';
import { vehicleBooking } from '../../services/vehicle/vehicle.service';

function PassengerDetailsForm(passengerCount: IPassengerCountProps) {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const {
    state: {
      seatState: {
        selectedVehicleData: { vehicleID, _id, vehicleNumber },
      },
    },
  } = useContext(StoreContext) as IStoreContext;
  const { passengerCount: count } = passengerCount;
  count.sort((a: any, b: any) => a.seatNo - b.seatNo);
  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPhone = localString?.minLengthTen;
  const maxLengthPhone = localString?.maxLengthTen;

  const passengerDetailsSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    phoneNumber: Yup.string()
      .required(required)
      .min(10, minLengthPhone)
      .max(10, maxLengthPhone),
  });

  const genderOptions = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
    { label: 'other', value: 'other' },
  ];

  const methods = useForm<IPassengerDetailsProps>({
    resolver: yupResolver(passengerDetailsSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { dirtyFields },
  } = methods;

  const { fields } = useFieldArray<any>({
    name: 'passengerDetails',
    control,
  });

  console.log(vehicleID, 'vehicleId');
  console.log(_id, '_id');
  console.log(vehicleNumber, 'vehicleNUmber');
  console.log(utility.getStore('userId'), 'userId');

  const submit = async (data: IPassengerDetailsProps) => {
    console.log(vehicleID, 'id');
    data.passengerDetails.forEach(
      (element: IPassengerDetailsFormProps, index: number) => {
        element.passengerSeat = count[index].seatNo;
        element.userId = utility.getStore('userId') as string;
        element.email = data.email;
        element.phoneNumber = data.phoneNumber;
      },
    );
    const response = await vehicleBooking(
      {
        passengerDetails: [...data.passengerDetails],
      },
      _id,
      vehicleNumber,
    );
    console.log(response, 'response');
  };

  return (
    <Fragment>
      <Parent>
        <h2 className="heading">{localString?.passengerDetails}</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submit)} autoComplete="off">
            <Box className="container">
              <h4 className="subHeading">
                {localString?.passengerInformation}
              </h4>
              {count.length &&
                count.map((element: IPassengerDetails, index: number) => {
                  return (
                    <Paper elevation={2} className="paper">
                      <Box className="row">
                        {localString?.passenger} {index + 1} &emsp;|
                        <Box>
                          {localString?.seat} {element.seatNo}
                        </Box>
                      </Box>
                      <Box className="inputs">
                        <Box>
                          <FormInput
                            name={`passengerDetails.${index}.passengerName`}
                            label="enterName"
                            showErrorMessage
                            size="small"
                          />

                          <RadioInput
                            name={`passengerDetails.${index}.passengerGender`}
                            label="Select Gender"
                            options={genderOptions}
                            row
                          />
                          <FormInput
                            name={`passengerDetails.${index}.passengerAge`}
                            label="enterAge"
                            showErrorMessage
                            size="small"
                            type="number"
                          />
                        </Box>
                      </Box>
                    </Paper>
                  );
                })}
            </Box>
            <Box className="container">
              <h4 className="subHeading">{localString?.contactInformation}</h4>
              <p className="description">{localString?.sendTicketDetails}</p>
              <Paper elevation={2} className="paper contactContainer">
                <Box className="column inputs">
                  <FormInput
                    name="email"
                    label="enterEmail"
                    showErrorMessage
                    size="small"
                  />

                  <FormInput
                    name="phoneNumber"
                    label="enterPhoneNumber"
                    showErrorMessage
                    size="small"
                  />
                </Box>
              </Paper>
              <Button
                disabled={!(Object.keys(dirtyFields).length >= 3)}
                type="submit"
                fullWidth
                className="button"
                variant="contained"
                size="small">
                {localString?.proceedToPayment}
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Parent>
    </Fragment>
  );
}

export default PassengerDetailsForm;
