import PaymentDetails from '../../components/PaymentDetails/paymentDetails';
import PaymentSummary from '../../components/PaymentSummary/paymentSummary';
import { PaymentContainer } from './payment.styles';

const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentSummary />
      <PaymentDetails />
    </PaymentContainer>
  );
};

export default Payment;
