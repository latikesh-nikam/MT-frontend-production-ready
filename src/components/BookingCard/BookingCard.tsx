import { useContext } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IBookingsCardProps } from './bookingCard.types';
import { BookingCardContainer } from './bookingCard.styles';

const BookingCard = ({ data }: IBookingsCardProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const { _id, adults, children, date, from, to } = data;

  const formatter = new Intl.DateTimeFormat('ru');

  return (
    <BookingCardContainer data-testid="bookingCard">
      <div className="cardHeader" data-testid="cardHeader">
        <h4>
          {localString?.bookingId}: {_id}
        </h4>
      </div>
      <p>
        {localString?.date}: {formatter.format(date)}
      </p>
      <div className="cities" data-testid="cities">
        <p className="city">{from} </p>{' '}
        <span className="icon">
          <ArrowForwardIcon />
        </span>{' '}
        <p className="city">{to}</p>
      </div>
      <div className="passengers" data-testid="passengers">
        <p>
          {localString?.adults}: {adults}, {localString?.children}:{' '}
          {children}
        </p>
      </div>
    </BookingCardContainer>
  );
};

export default BookingCard;
