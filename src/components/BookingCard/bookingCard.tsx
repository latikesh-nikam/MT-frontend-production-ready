import { useContext } from 'react';
import Grid from '@mui/material/Grid/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IBookingsCardProps } from './bookingCard.types';
import { BookingCardContainer } from './bookingCard.styles';

const BookingCard = ({ data }: IBookingsCardProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const { _id, date, from, to } = data;

  const formatter = new Intl.DateTimeFormat('ru');

  return (
    <Grid item xs={12} sm={6} md={3}>
      <BookingCardContainer data-testid="bookingCard">
        <div className="cardHeader" data-testid="cardHeader">
          <h3>
            {localString?.bookingId}: {_id}
          </h3>
        </div>
        <p>
          {localString?.date}: {formatter.format(date)}
        </p>
        <div className="cities" data-testid="cities">
          <p className="city">{from} </p>{' '}
          <div className="icon">
            <ArrowRightAltIcon fontSize="medium" />
          </div>{' '}
          <p className="city">{to}</p>
        </div>
      </BookingCardContainer>
    </Grid>
  );
};

export default BookingCard;
