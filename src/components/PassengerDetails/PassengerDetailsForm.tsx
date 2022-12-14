import { Fragment } from 'react';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';

import { ILocalisationContext } from '../../hoc/Localization/localisationProvider.types';
import IPassengerDetailsProps from './passengerDetails.types';
import { authURLConstants } from '../../constants/authURLConstants';

import { updateData } from '../../services/http';

import { LocalisationContext } from '../../hoc/Localization/LocalisationProvider';
import FormInput from '../FormInput/FormInput';
import RadioInput from '../RadioInput/RadioInput';

import { Parent } from './passengerDetails.style';

function PassengerDetailsForm(passengerCount: any) {
  const { localisation, updateLocalisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;
  const { passengerCount: count } = passengerCount;
  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPhone = localString?.minLengthTen;
  const maxLengthPhone = localString?.maxLengthTen;

  const passengerDetailsSchema = Yup.object({
    name: Yup.string().required(required),
    email: Yup.string().required(required).email(emailMessage),
    phone: Yup.string()
      .required(required)
      .min(10, minLengthPhone)
      .max(10, maxLengthPhone),
    gender: Yup.string().required(required),
    age: Yup.string().required(required),
  });

  const genderOptions = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
    { label: 'other', value: 'other' },
  ];

  const methods = useForm<IPassengerDetailsProps>({
    resolver: yupResolver(passengerDetailsSchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      gender: '',
      age: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { dirtyFields, defaultValues },
  } = methods;

  const submit = async (data: any) => {
    try {
      const response = await updateData(authURLConstants.forgotPassword, data);
      console.log(response);
      reset({
        email: '',
        name: '',
        phone: '',
        gender: '',
        age: '',
      });
      toast.success(`${response.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error: any) {
      toast.error(error.response.data.error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Fragment>
      <Parent>
        <h2 className="heading">Passenger Details</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submit)} autoComplete="off">
            <Box className="container">
              <h4 className="subHeading">Passenger Information</h4>
              {count &&
                count.map((element: any, index: number) => {
                  return (
                    <Paper elevation={3} className="paper">
                      <Box className="row">
                        Passenger {index + 1} &emsp;|
                        <Box>Seat {element}</Box>
                      </Box>
                      <Box className="inputs">
                        <Box>
                          <FormInput
                            name={`name_${index}`}
                            label="enterName"
                            showErrorMessage
                            size="small"
                          />

                          <RadioInput
                            name={`gender_${index}`}
                            label="Select Gender"
                            options={genderOptions}
                            row
                          />
                          <FormInput
                            name={`age_${index}`}
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
              <h4 className="subHeading">Contact Information</h4>
              <p className="description">
                Your ticket will be sent to these details
              </p>
              <Paper elevation={3} className="paper">
                <Box className="column inputs">
                  <FormInput
                    name="email"
                    label="enterEmail"
                    showErrorMessage
                    size="small"
                  />

                  <FormInput
                    name="phone"
                    label="enterPhoneNumber"
                    showErrorMessage
                    size="small"
                  />
                </Box>
              </Paper>
              <Button
                type="submit"
                fullWidth
                className="button"
                variant="contained"
                size="small"
                disabled={
                  !(
                    Object.keys(dirtyFields).length ===
                    Object.keys(defaultValues as IPassengerDetailsProps).length
                  )
                }>
                Proceed to Payment
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Parent>
    </Fragment>
  );
}

export default PassengerDetailsForm;
