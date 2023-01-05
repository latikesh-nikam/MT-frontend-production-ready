import { useContext, Fragment } from 'react';
import Grid from '@mui/material/Grid/Grid';
import { IRecentBookingsProps } from './recentBookings.types';
import { RecentBookingsContainer } from './recentBookings.styles';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import BookingCard from '../BookingCard/bookingCard';

const RecentBookings = ({ data }: IRecentBookingsProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const showBookingCard = data.length > 0;

  return (
    <RecentBookingsContainer data-testid="recentBookings">
      <div data-testid="recentBookingsHeader">
        <h2>{localString['recentBookings']}</h2>
      </div>
      {showBookingCard ? (
        <Grid
          container
          data-testid="bookings"
          className="cardsContainer"
          spacing={2}>
          {data.map(booking => {
            return <BookingCard data={booking} key={booking._id} />;
          })}
        </Grid>
      ) : (
        <Fragment></Fragment>
      )}
    </RecentBookingsContainer>
  );
};

export default RecentBookings;
