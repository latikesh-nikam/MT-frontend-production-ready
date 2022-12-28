import { useContext, useState } from 'react';
import Button from '@mui/material/Button/Button';
import Divider from '@mui/material/Divider/Divider';
import { BusResultCardContainer } from './busResultCard.styles';
import { IBusResultCardProps } from './busResultCard.types';
import { iconMap } from '../BusResults/busResults.data';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { seatDataAction } from '../../context/actions/seatActions/seatActions';
import { useNavigate } from 'react-router';

const BusResultCard = ({ data }: IBusResultCardProps) => {
  const [selected, setSelected] = useState('');
  const { dispatch } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const navigate = useNavigate();
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

  const handleViewSeats = (data: any) => {
    dispatch(seatDataAction(data));
    navigate('/home/viewSeats');
  };
  return (
    <BusResultCardContainer>
      <div className="busDetails">
        <div className="vehicle">
          <h4>
            {operatorName} {vehicleName}
          </h4>
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
        {ratings && (
          <div className="ratingDetails">
            <div className={ratingClassName}>
              <p>{ratings}</p>
            </div>
          </div>
        )}
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
        <div className="viewSeats">
          <Button
            variant="contained"
            size="small"
            onClick={() => handleViewSeats(data)}>
            {localString?.viewSeats}
          </Button>
        </div>
      </div>

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
        <Divider orientation="vertical" color="primary" />
        <div
          className={
            selected === 'boardingAndDropping' ? 'active actions' : 'actions'
          }
          onClick={() => handleClick('boardingAndDropping')}>
          <p>
            {localString?.boarding} {localString?.and} {localString?.dropping}{' '}
            {localString?.points}
          </p>
        </div>
      </div>

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
      {selected === 'boardingAndDropping' && (
        <div className="boardingAndDroppingPointsContainer">
          <div className="stationsContainer">
            <h4>
              {localString?.boarding} {localString?.points}
            </h4>
            {departure.BoardingPoint?.map(
              (boardingPoint: any, index: number) => (
                <div className="station" key={index}>
                  <p className="time">{boardingPoint.time}</p>
                  <p className="lightGrey">{boardingPoint.locationName}</p>
                </div>
              ),
            )}
          </div>
          <div className="stationsContainer">
            <h4>
              {localString?.dropping} {localString?.points}
            </h4>
            {arrival.BoardingPoint?.map((boardingPoint: any, index: number) => (
              <div className="station" key={index}>
                <p className="time">{boardingPoint.time}</p>
                <p className="lightGrey">{boardingPoint.locationName}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </BusResultCardContainer>
  );
};

export default BusResultCard;
