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
import SeatDetails from '../SeatDetails/SeatDetails';
import { detailsContainer } from './seatMockData';

import { ParentBox, Puller, StyledBox } from './seat.style';
import { berthData } from '../Berth/berth.mockData';
import { ISeatProps } from './seat.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { Global } from '@emotion/react';
import PassengerDetailsForm from '../PassengerDetails/PassengerDetailsForm';
import BottomBar from '../../hoc/BottomBar/bottomBar';

const drawerBleeding = 56;

interface Props {
  window?: () => Window;
}

function Seat() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ISeatProps[]>([]);
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

  const lowerDeck = berthData.filter(element => element.deck === 'lower Deck');

  const dataLengthForLowerSeats = lowerDeck.length;

  const singleRow = lowerDeck.slice(0, dataLengthForLowerSeats / 3);

  const doubleRow = lowerDeck.slice(
    dataLengthForLowerSeats / 3,
    dataLengthForLowerSeats,
  );

  //////////////////////////////////////////////////

  const upperDeck = berthData.filter(element => element.deck === 'upper Deck');
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

        {/* <Box className="drawer">
          <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: 'visible',
              },
            }}
          />
          {selected.length > 0 && (
            <Button
              size="small"
              onClick={() => setOpen(true)}
              className="summaryButton">
              Swipe up for booking summary
            </Button>
          )}
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}>
            <StyledBox
              sx={{
                visibility: 'hidden',
                position: 'absolute',
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                right: 0,
                left: 0,
              }}>
              <Puller />
              <Typography sx={{ p: 2, color: 'text.secondary' }}>
                Total Fare : ₹2000
                <span>
                  {open && (
                    <span onClick={() => setOpen(false)}>
                      <KeyboardArrowDownIcon />
                    </span>
                  )}
                </span>
              </Typography>
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: '100%',
                overflow: 'auto',
              }}> */}
        <BottomBar text="Swipe up for Booking Summary">
          <Box>
            <Box className="heading">
              <Typography gutterBottom variant="h3" component="div">
                {localString?.bookingSummary}
              </Typography>
            </Box>
            <Box className="source">
              <Typography variant="h5" color="text.secondary">
                {localString?.source}: <span className="rightText">Pune</span>
              </Typography>
              <Typography variant="h5" color="text.secondary">
                <span className="rightText bottom">Swargate - 9:00am</span>
              </Typography>
            </Box>
            <Box className="destination">
              <Typography variant="h5" color="text.secondary">
                {localString?.destination}:{' '}
                <span className="rightText">Nagpur</span>
              </Typography>
              <Typography variant="h5" color="text.secondary">
                <span className="rightText bottom">ABC Bus Stop - 12:00pm</span>
              </Typography>
            </Box>
            <Box className="seats">
              <Typography variant="h5" color="text.secondary">
                {localString?.seatsSelected}:{' '}
                <span className="rightText">
                  {selected.length > 0
                    ? selected
                        .map((element: any) => element.seatNo)
                        .sort((a: number, b: number) => a - b)
                        .join(', ')
                    : 'None'}
                </span>
              </Typography>
            </Box>
            <Box className="fare">
              <Typography variant="h5" color="text.secondary">
                {localString?.totalFare}:{' '}
                <span className="rightText">Rs. {fare}</span>
              </Typography>
            </Box>
            <Button variant="contained" size="small">
              Fill Passenger Details
            </Button>
          </Box>
        </BottomBar>
        {/* </StyledBox>
          </SwipeableDrawer>
        </Box> */}

        <Box className="seatDetails" sx={{ marginTop: '10rem' }}>
          <SeatDetails selected={selected} />
        </Box>
      </ParentBox>
    </Fragment>
  );
}
export default Seat;
