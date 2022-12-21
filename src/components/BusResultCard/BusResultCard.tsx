import { useContext, useState } from 'react';
import Button from '@mui/material/Button/Button';
import Divider from '@mui/material/Divider/Divider';
import { BusResultCardContainer } from './busResultCard.styles';
import { IBusResultCardProps } from './busResultCard.types';
import { iconMap } from '../BusResults/busResults.data';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';

const BusResultCard = ({ data }: IBusResultCardProps) => {
  const [showAmenities, updateShowAmenities] = useState(false);
  const [showBoardingAndDroppingPoints, updateShowBoardingAndDroppingPoints] =
    useState(false);

  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
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

  const ratingClassName =
    ratings >= 4
      ? 'ratings green'
      : ratings >= 3 && ratings < 4
      ? 'ratings orange'
      : 'ratings red';

  const handleAmenity = () => {
    updateShowBoardingAndDroppingPoints(false);
    updateShowAmenities(!showAmenities);
  };
  const handleBoardingAndDroppingPoints = () => {
    updateShowAmenities(false);
    updateShowBoardingAndDroppingPoints(!showBoardingAndDroppingPoints);
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
            <h3>{station[0].sourceDepartureTime}</h3>
            <p className="lightGrey">{station[0].sourceName}</p>
          </div>
          <div className="totalDuration time">
            <p className="lightGrey">{totalTravelTime} hrs</p>
          </div>
          <div className="arrival time">
            <p>{station.slice(-1)[0].sourceDepartureTime}</p>
            <p className="lightGrey">{station.slice(-1)[0].sourceName}</p>
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
          <Button variant="contained" size="small">
            {localString?.viewSeats}
          </Button>
        </div>
      </div>

      <div className="actionsContainer lightGrey">
        <div
          className={
            showAmenities ? 'active amenities actions' : 'amenities actions'
          }
          onClick={handleAmenity}>
          <p>{localString?.amenities}</p>
        </div>
        <Divider orientation="vertical" color="primary" />
        <div
          className={
            showBoardingAndDroppingPoints ? 'active actions' : 'actions'
          }
          onClick={handleBoardingAndDroppingPoints}>
          <p>
            {localString?.boarding} {localString?.and} {localString?.dropping}{' '}
            {localString?.points}
          </p>
        </div>
      </div>

      {showAmenities && (
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
      {showBoardingAndDroppingPoints && (
        <div className="boardingAndDroppingPointsContainer">
          <div className="stationsContainer">
            <h3>
              {localString?.boarding} {localString?.points}
            </h3>
            {station[0].BoardingPoint?.map(
              (boardingPoint: any, index: number) => (
                <div className="station" key={index}>
                  <p className="time">{boardingPoint.time}</p>
                  <p className="lightGrey">{boardingPoint.locationName}</p>
                </div>
              ),
            )}
          </div>
          <div className="stationsContainer">
            <h3>
              {localString?.dropping} {localString?.points}
            </h3>
            {station
              .slice(-1)[0]
              .BoardingPoint?.map((boardingPoint: any, index: number) => (
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
