import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box/Box';
import FormInput from '../FormInput/formInput';
import Button from '@mui/material/Button/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import InputAdornment from '@mui/material/InputAdornment';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IPaymentDetailsInput } from './paymentDetails.types';
import { PaymentDetailsContainer } from './paymentDetails.styles';
import {
  paymentDetailsDefaultValues,
  paymentDetailsSchema,
} from './paymentDetails.data';
import { payment } from '../../services/vehicle/vehicle.service';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { routes } from '../../constants/route';
import { toasterDataAction } from '../../context/actions/toasterActions/toasterActions';
import { bookingDataAction } from '../../context/actions/bookingDetailsActions/bookingDetailsActions';

const PaymentDetails = () => {
  const {
    state: {
      bookingDetailsState: {
        paymentInfo: { bookingId },
      },
    },
    dispatch,
  } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const navigate = useNavigate();

  const schema = paymentDetailsSchema(localString);

  const methods = useForm<IPaymentDetailsInput>({
    resolver: yupResolver(schema),
    defaultValues: paymentDetailsDefaultValues,
  });

  const {
    handleSubmit,
    formState: { dirtyFields },
  } = methods;

  const onSubmit: SubmitHandler<IPaymentDetailsInput> = async data => {
    try {
      const response = await payment(bookingId, data);
      dispatch(
        toasterDataAction({
          message: response.message,
          type: 'success',
          showMessage: true,
        }),
      );
      dispatch(bookingDataAction(response.data[0]));
      navigate(routes.success);
    } catch (error) {
      throw error;
    }
  };

  const disablePaymentButton = !(
    Object.keys(dirtyFields).length ===
    Object.keys(paymentDetailsDefaultValues).length
  );

  const email = localString?.email;

  return (
    <PaymentDetailsContainer>
      <Box className="paymentDetails">
        <h2 className="heading"> {localString?.paymentDetails}</h2>
        <Box className="paymentDetailsForm">
          <FormProvider {...methods}>
            <form
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              className="paymentDetailsForm">
              <div className="formInput">
                <FormInput
                  name="email"
                  label={email && email.replace('*', '')}
                  showErrorMessage
                />
              </div>
              <div className="formInput">
                <FormInput
                  name="cardNumber"
                  label={localString?.cardNumber}
                  showErrorMessage
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CreditCardIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="formInput">
                <FormInput
                  name="cardName"
                  showErrorMessage
                  label={localString?.cardHolderName}
                />
              </div>
              <div className="row">
                <div className="formInput month">
                  <FormInput
                    name="cardExpMonth"
                    showErrorMessage
                    label={localString?.month}
                  />
                </div>
                <div className="formInput">
                  <FormInput
                    name="cardExpYear"
                    showErrorMessage
                    label={localString?.year}
                  />
                </div>
                <div className="formInput cvc">
                  <FormInput
                    name="cardCVC"
                    showErrorMessage
                    type="password"
                    label={localString?.cvv}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SubtitlesIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className="actions">
                <Button
                  className="paymentButton"
                  variant="contained"
                  type="submit"
                  disabled={disablePaymentButton}>
                  {localString?.pay}
                </Button>
                <Button variant="outlined">{localString?.cancel}</Button>
              </div>
            </form>
          </FormProvider>
        </Box>
      </Box>
    </PaymentDetailsContainer>
  );
};

export default PaymentDetails;
