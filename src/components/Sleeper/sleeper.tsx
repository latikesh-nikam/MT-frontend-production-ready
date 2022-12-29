import { Fragment, useContext } from 'react';
import { useState } from 'react';

import {
  Box,
  Button,
  CssBaseline,
  Paper,
  Skeleton,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import image from '../../assets/images/sw.png';
import SeatDetails from '../SeatDetails/seatDetails';

import { ParentBox } from './sleeper.style';
// import { berthData } from '../Berth/berth.mockData';
import { ISeatProps } from './sleeper.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { Global } from '@emotion/react';
import PassengerDetailsForm from '../PassengerDetails/passengerDetailsForm';
import BottomBar from '../../hoc/BottomBar/bottomBar';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { detailsContainer } from './sleeperMockData';

function Seat() {
  const [selected, setSelected] = useState<ISeatProps[]>([]);
  const {
    state: {
      seatState: { selectedVehicleData },
    },
  } = useContext(StoreContext) as IStoreContext;

  const berthData = selectedVehicleData.seatDetails as ISeatProps[];

  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  function classSelector(seat: ISeatProps) {
    if (selected.includes(seat.seatNo)) {
      seat.status = 'unavailable';
    }
    const capitalizedText =
      seat.status.slice(0, 1).toUpperCase() +
      seat.status.slice(1, seat.status.length);
    return `${seat.bookedGender}${capitalizedText}`;
  }

  const handleChange = (seat: ISeatProps) => {
    if (seat.status === 'unavailable') {
      const selectedSeat = selected.filter(
        (singleSeat: ISeatProps) => singleSeat.seatNo === seat.seatNo,
      );
      if (selectedSeat.length > 0) {
        seat.status = 'available';
        setSelected(selected.filter(element => element.seatNo !== seat.seatNo));
      } else {
        return;
      }
    } else {
      const selectedSeat = selected.filter(
        (singleSeat: ISeatProps) => singleSeat.seatNo === seat.seatNo,
      );
      if (selectedSeat.length > 0) {
        setSelected(selected.filter(element => element !== seat.seatNo));
        seat.status = seat.status === 'available' ? 'unavailable' : 'available';
      } else {
        seat.status = 'unavailable';
        setSelected([...selected, seat]);
      }
    }
  };

  const lowerDeck = berthData.filter(element => element.seatNo.includes('L'));

  const dataLengthForLowerSeats = lowerDeck.length;

  const singleRow = lowerDeck.slice(0, dataLengthForLowerSeats / 3);

  const doubleRow = lowerDeck.slice(
    dataLengthForLowerSeats / 3,
    dataLengthForLowerSeats,
  );

  //////////////////////////////////////////////////

  const upperDeck = berthData.filter(element => element.seatNo.includes('U'));
  const dataLengthForUpperSeats = upperDeck.length;

  const singleRowForUpperSeats = upperDeck.slice(
    0,
    dataLengthForUpperSeats / 3,
  );

  const doubleRowForUpperSeats = upperDeck.slice(
    dataLengthForUpperSeats / 3,
    dataLengthForUpperSeats,
  );

  const fare = selected.reduce(
    (current: number, sum: any) => current + sum.seatFare,
    0,
  );

  function gridItem(seat: ISeatProps, index: number) {
    return (
      <Grid item xs={2} key={index}>
        <Box
          key={index}
          className={`${classSelector(seat)} mainBox`}
          onClick={() => handleChange(seat)}>
          <p className="id">{seat.seatNo}</p>
          <Box
            key={index + seat.seatNo}
            className={`${classSelector(seat)} smallBox`}
            onClick={() => handleChange(seat)}></Box>
        </Box>
      </Grid>
    );
  }

  return (
    <Fragment>
      <ParentBox>
        <Box className="seats">
          <Box className="busContainer">
            <img src={image} alt="drive icon" className="steeringImage" />
            <Box className="boxContainer">
              <Grid direction="column" className="nowrap" container rowGap={2}>
                {singleRow.map((seat: ISeatProps, index: number) => {
                  return gridItem(seat, index);
                })}
              </Grid>
              <Divider className="divider" />
              <Grid direction="column" container className="nowrap" rowGap={2}>
                {doubleRow
                  .slice(0, doubleRow.length / 2)
                  .map((seat: ISeatProps, index: number) => {
                    return gridItem(seat, index);
                  })}
              </Grid>
              <Box className="space"></Box>
              <Grid direction="column" className="nowrap" container rowGap={2}>
                {doubleRow
                  .slice(doubleRow.length / 2)
                  .map((seat: ISeatProps, index: number) => {
                    return gridItem(seat, index + doubleRow.length / 2);
                  })}
              </Grid>
            </Box>
          </Box>
          <Box className="seatLegend">
            {detailsContainer.map(detail => {
              return (
                <Box className="singleLegend">
                  <Box className={detail.classname}></Box>
                  <span>{localString[detail.text]}</span>
                </Box>
              );
            })}
          </Box>

          {/* Upper Berth */}

          <Box className="boxContainer upperSeatBox">
            <Grid
              direction="column"
              className="nowrap gridMargin"
              container
              rowGap={2}>
              {singleRowForUpperSeats.map((seat: ISeatProps, index: number) => {
                return gridItem(seat, index);
              })}
            </Grid>
            <Divider className="divider" />
            <Grid
              direction="column"
              container
              className="nowrap gridMargin"
              rowGap={2}>
              {doubleRowForUpperSeats
                .slice(0, doubleRowForUpperSeats.length / 2)
                .map((seat: ISeatProps, index: number) => {
                  return gridItem(seat, index);
                })}
            </Grid>
            <Box className="space"></Box>
            <Grid
              direction="column"
              className="nowrap gridMargin"
              container
              rowGap={2}>
              {doubleRowForUpperSeats
                .slice(doubleRowForUpperSeats.length / 2)
                .map((seat: ISeatProps, index: number) => {
                  return gridItem(
                    seat,
                    index + doubleRowForUpperSeats.length / 2,
                  );
                })}
            </Grid>
            <p className="deckInfo">Upper Deck</p>
          </Box>
        </Box>

        {/* selected seats */}
        {selected.length > 0 && (
          <BottomBar text="Swipe up for Booking Summary">
            <Box
              sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}
              className="childrenContainer">
              <SeatDetails selected={selected} />
            </Box>
          </BottomBar>
        )}
        <Box className="seatDetails">
          <SeatDetails selected={selected} />
        </Box>
      </ParentBox>
    </Fragment>
  );
}
export default Seat;
