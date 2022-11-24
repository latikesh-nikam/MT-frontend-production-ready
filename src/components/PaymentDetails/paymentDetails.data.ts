import * as Yup from 'yup';
import { IPaymentDetailsInput } from './paymentDetails.types';

export const paymentDetailsSchema = (localString: any) => {
  const monthMessage = localString?.monthMessage;
  const yearMessage = localString?.yearMessage;
  const lengthSixteen = localString?.lengthSixteen;
  const lengththreeMessage = localString?.lengththree;

  const date = new Date();
  const currentYear = date.getFullYear();
  const cvvRegex = /^[0-9]{3}$/;
  const cardNumberRegex = /^[0-9]{16}$/;

  return Yup.object({
    cardNumber: Yup.string()
      .required('')
      .matches(cardNumberRegex, lengthSixteen)
      .min(16)
      .max(16),
    cardHolderName: Yup.string().required(''),
    month: Yup.number()
      .required('')
      .lessThan(13, monthMessage)
      .moreThan(0, monthMessage),
    year: Yup.number()
      .required('')
      .moreThan(currentYear, yearMessage)
      .lessThan(currentYear + 10, yearMessage),
    cvv: Yup.string()
      .required('')
      .matches(cvvRegex, lengththreeMessage)
      .min(3)
      .max(3),
  });
};

export const paymentDetailsDefaultValues: IPaymentDetailsInput = {
  cvv: '',
  cardHolderName: '',
  cardNumber: '',
  month: '',
  year: '',
};
