import { useContext, forwardRef } from 'react';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import useWindowSize from '../../hooks/useWindowSize';
import GenericTable from '../GenericTable/genericTable';
import { bookingsDetailsData, tableHeaders } from './bookingDetails.data';
import { BookingDetailsContainer } from './bookingDetails.styles';
import logo from '../../assets/images/logo.png';

const BookingDetails = (props: any, ref: any) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const { width } = useWindowSize();

  const windowWidth = width >= 576;

  const {
    arrivalDate,
    arrivalTime,
    bookedBy,
    departureDate,
    departureTime,
    from,
    passengerDetails,
    to,
    totalFare,
  } = bookingsDetailsData;

  const passengerDetailsTableHeaders = tableHeaders(localString);

  const bookingDate = new Date();

  const fareContainer = (
    <div className="fare paddingTopBottom">
      <h3 className="lightGrey">{localString?.totalFare}</h3>
      <h3 className="">
        {localString?.rs}
        {totalFare}
      </h3>
    </div>
  );

  return (
    <BookingDetailsContainer ref={ref}>
      <header className="heading borderBottom">
        <div className="logoContainer">
          <img src={logo} alt={localString?.MTicket} />
        </div>
        <h2>{localString?.busTicketPurchase}</h2>
        {!windowWidth && fareContainer}
      </header>
      <main className="bookingDeatilsMain">
        <div className="dateAndBookingPersonDetails borderBottom paddingTopBottom flex">
          <div className="details date flex">
            <h4>
              {localString?.booking} {localString?.date}
            </h4>
            <p>{bookingDate.toDateString()}</p>
          </div>
          <div className=" details bookedBy flex">
            <h4>{localString?.bookedBy}</h4>
            <p>{bookedBy}</p>
          </div>
        </div>
        <div className="busdetailsContainer paddingTopBottom borderBottom flex">
          <h3>{localString?.busDetails}</h3>
          <div className="busDetails">
            <div className="station from flex">
              <h4>{localString?.from}</h4>
              <p>{from}</p>
            </div>
            <div className="station departure flex">
              <h4>
                {localString?.departure} {localString?.date}
              </h4>
              <div>
                <p>{departureDate.toDateString()}</p>
                <p>{departureTime}</p>
              </div>
            </div>

            <div className="station to flex">
              <h4>{localString?.to}</h4>
              <p>{to}</p>
            </div>
            <div className="station arrival flex">
              <h4>
                {localString?.arrival} {localString?.date}
              </h4>
              <div>
                <p>{arrivalDate.toDateString()}</p>
                <p>{arrivalTime}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="passengerDetailsContainer paddingTopBottom borderBottom flex">
          <h3>{localString?.passengerDetails}</h3>
          <GenericTable
            data={passengerDetails}
            headers={passengerDetailsTableHeaders}
          />
        </div>
        {windowWidth && fareContainer}
      </main>
    </BookingDetailsContainer>
  );
};

export default forwardRef(BookingDetails);
