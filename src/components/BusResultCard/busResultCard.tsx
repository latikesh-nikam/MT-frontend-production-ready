import { useContext, useState } from 'react';
import Button from '@mui/material/Button/Button';
import { BusResultCardContainer } from './busResultCard.styles';
import { IBusResultCardProps } from './busResultCard.types';
import { iconMap } from '../BusResults/busResults.data';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import useWindowSize from '../../hooks/useWindowSize';

const BusResultCard = ({ data }: IBusResultCardProps) => {
  const [selected, setSelected] = useState('');

  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const { width } = useWindowSize();
  const windowWidth = width > 576;
  const {
    vehicleName,
    operatorName,
    vehicleClassType,
    vehicleType,
    station,
    ratings,
    amenities,
    fixedFare,
    TotalAvailableSeat,
    totalTravelTime,
  } = data;

  const [departure, ...stations] = station;
  const arrival = station.slice(-1)[0];

  const ratingClassName =
    ratings >= 4
      ? 'ratings green'
      : ratings >= 3 && ratings < 4
      ? 'ratings orange'
      : 'ratings red';

  const handleClick = (type: string) => {
    if (selected === type) setSelected('');
    else setSelected(type);
  };

  const handleViewSeats = () => {
    console.log('view seats');
  };

  return (
    <BusResultCardContainer onClick={!windowWidth ? handleViewSeats : () => {}}>
      <div className="busDetails">
        <div className="vehicleAndTimeDetails">
          <div className="vehicle">
            <h3>
              {operatorName} {vehicleName}
            </h3>
            <p className="lightGrey">
              {vehicleType} {vehicleClassType}
            </p>
          </div>
          <div className="timeDetails">
            <div className="departure time">
              <h3>{departure.sourceDepartureTime}</h3>
              <p className="lightGrey">{departure.sourceName}</p>
            </div>
            <div className="totalDuration time">
              <p className="lightGrey">{totalTravelTime} hrs</p>
            </div>
            <div className="arrival time">
              <p>{arrival.sourceDepartureTime}</p>
              <p className="lightGrey">{arrival.sourceName}</p>
            </div>
          </div>
        </div>
        {ratings && (
          <div className="ratingDetails">
            <div className={ratingClassName}>
              <p>{ratings}</p>
            </div>
          </div>
        )}
        <div className="fareAndSeatsAvailabilty">
          <div className="fare">
            <p className="lightGrey">{localString?.startsFrom}</p>
            <h3>
              <span className="lightGrey fontWeightLight">
                {' '}
                {localString?.INR}
              </span>{' '}
              {fixedFare}
            </h3>
          </div>
          <div className="seatsAvailability">
            <p className="lightGrey">
              {' '}
              {TotalAvailableSeat} {localString?.seatsAvailable}
            </p>
          </div>
        </div>
        {windowWidth && (
          <div className="viewSeats">
            <Button variant="contained" size="small" onClick={handleViewSeats}>
              {localString?.viewSeats}
            </Button>
          </div>
        )}
      </div>

      {windowWidth && (
        <div className="actionsContainer lightGrey">
          <div
            className={
              selected === 'amenity'
                ? 'active amenities actions'
                : 'amenities actions'
            }
            onClick={() => handleClick('amenity')}>
            <p>{localString?.amenities}</p>
          </div>
        </div>
      )}
      {selected === 'amenity' && (
        <div className="amenitiesContainer">
          {amenities.map((amenity: string, index: number) => {
            const Icon = iconMap[amenity];
            return (
              <div className="amenity fontWeightLight" key={index}>
                <Icon color="primary" />
                <p>{amenity}</p>
              </div>
            );
          })}
        </div>
      )}
    </BusResultCardContainer>
  );
};

export default BusResultCard;
