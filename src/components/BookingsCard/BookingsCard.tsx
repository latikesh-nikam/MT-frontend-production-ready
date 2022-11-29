import { Box } from '@mui/material';
import Card from '../../hoc/Card/Card';
import styles from './bookingsCard.module.scss';
import { IBookingsCardProps } from './bookingsCard.types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

const BookingsCard = ({ data }: IBookingsCardProps) => {
  const formatter = new Intl.DateTimeFormat('ru');
  const { t } = useTranslation();

  return (
    <Box className={styles.bookingsCard}>
      <Box className={styles.bookingsHeader}>
        <h2>{t('recentBookings')}</h2>
      </Box>
      {data.length > 0 ? (
        <Box className={styles.cards}>
          {data.map(booking => {
            return (
              <Card key={booking._id}>
                <h3>
                  {t('bookingId')}: {booking._id}
                </h3>
                <p>
                  {t('date')}: {formatter.format(booking.date)}
                </p>
                <div className={styles.cities}>
                  <p>{booking.from} </p>{' '}
                  <span>
                    <ArrowForwardIcon fontSize="small" />
                  </span>{' '}
                  <p>{booking.to}</p>
                </div>
                <p>
                  {t('adults')}: {booking.adults}, {t('children')}:{' '}
                  {booking.children}
                </p>
              </Card>
            );
          })}
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default BookingsCard;
