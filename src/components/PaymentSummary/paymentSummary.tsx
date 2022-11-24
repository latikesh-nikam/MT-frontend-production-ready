import { useContext } from 'react';
import WalletIcon from '@mui/icons-material/Wallet';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { PaymentSummaryContainer } from './paymentSummary.styles';

const PaymentSummary = () => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  return (
    <PaymentSummaryContainer>
      <div className="paymentSummary">
        <header className="heading">
          <h2>{localString?.paymentSummary}</h2>
        </header>

        <main className="summaryDetails">
          <div className="items amount">
            <div className="header">
              <WalletIcon />
            </div>
            <div className="details">
              <p>{localString?.amount} </p>
              <h3>{localString?.rs} 3000</h3>
            </div>
          </div>

          <div className="items date">
            <div className="header">
              <CalendarMonthIcon />
            </div>
            <div className="details">
              <p>{localString?.date} </p>
              <h3>28/12/2022</h3>
            </div>
          </div>

          <div className="items issuer">
            <div className="header">
              <StarBorderIcon />
            </div>
            <div className="details">
              <p>{localString?.issuer} </p>
              <h3>{localString?.Mticket}</h3>
            </div>
          </div>

          <div className="items bookingId">
            <div className="header">
              <LabelImportantIcon />
            </div>
            <div className="details">
              <p>{localString?.bookingId} </p>
              <h3>OYX123580219G</h3>
            </div>
          </div>
        </main>
      </div>
    </PaymentSummaryContainer>
  );
};

export default PaymentSummary;
