import { useContext } from 'react';
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

const PaymentDetails = () => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const schema = paymentDetailsSchema(localString);

  const methods = useForm<IPaymentDetailsInput>({
    resolver: yupResolver(schema),
    defaultValues: paymentDetailsDefaultValues,
  });

  const {
    handleSubmit,
    formState: { dirtyFields },
  } = methods;

  const onSubmit: SubmitHandler<IPaymentDetailsInput> = data => {
    console.log(data);
  };

  const disablePaymentButton = !(
    Object.keys(dirtyFields).length ===
    Object.keys(paymentDetailsDefaultValues).length
  );

  return (
    <PaymentDetailsContainer>
      <Box className="paymentDetails">
        <h2 className="heading"> {localString?.paymentDetails}</h2>
        <Box className="paymentDetailsForm">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="paymentDetailsForm">
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
                  name="cardHolderName"
                  showErrorMessage
                  label={localString?.cardHolderName}
                />
              </div>
              <div className="row">
                <div className="formInput month">
                  <FormInput
                    name="month"
                    showErrorMessage
                    label={localString?.month}
                  />
                </div>
                <div className="formInput">
                  <FormInput
                    name="year"
                    showErrorMessage
                    label={localString?.year}
                  />
                </div>
                <div className="formInput cvv">
                  <FormInput
                    name="cvv"
                    showErrorMessage
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
