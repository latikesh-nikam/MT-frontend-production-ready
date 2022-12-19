import { Fragment } from 'react';
import { useState } from 'react';

import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';

import image from '../../assets/images/sw.png';
import SeatDetails from '../SeatDetails/SeatDetails';
import { detailsContainer } from './seatMockData';

import { ParentBox } from './seat.style';
import { berthData } from '../Berth/berth.mockData';

type ISeatProps = {
  id: number;
  status: 'available' | 'unavailable' | 'selected';
  bookedGender: 'female' | 'male';
};

function Seat() {
  const [selected, setSelected] = useState<any[]>([]);

  function classSelector(seat: any) {
    if (selected.includes(seat.seatNo)) {
      seat.status = 'unavailable';
    }
    const capitalizedText =
      seat.status.slice(0, 1).toUpperCase() +
      seat.status.slice(1, seat.status.length);
    return `${seat.bookedGender}${capitalizedText}`;
  }

  const handleChange = (seat: any) => {
    if (seat.status === 'unavailable') {
      const selectedSeat = selected.filter(
        (s: any) => s.seatNo === seat.seatNo,
      );
      if (selectedSeat.length > 0) {
        setSelected(selected.filter(element => element.seatNo !== seat.seatNo));
        seat.status = 'available';
      } else {
        return;
      }
    } else {
      const selectedSeat = selected.filter(
        (s: any) => s.seatNo === seat.seatNo,
      );

      if (selectedSeat.length > 0) {
        setSelected(selected.filter(element => element.seatNo !== seat.seatNo));
        seat.status = seat.status === 'available' ? 'unavailable' : 'available';
      } else {
        seat.status = 'unavailable';
        selected.push(seat);
        setSelected([...selected]);
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

  function gridItem(seat: any, index: number) {
    return (
      <Grid item xs={2} key={index}>
        <Box
          key={index}
          className={classSelector(seat) + ' ' + 'mainBox'}
          onClick={() => handleChange(seat)}>
          <p className="id">{seat.seatNo}</p>
          <Box
            key={index + seat.seatNo}
            className={classSelector(seat) + ' ' + 'smallBox'}
            onClick={() => handleChange(seat)}></Box>
        </Box>
      </Grid>
    );
  }

  return (
    <Fragment>
      <ParentBox>
        <Box className="parentContainer">
          <Box className="busContainer">
            <img src={image} alt="drive icon" className="steeringImage" />
            <Box className="boxContainer">
              <Grid direction="column" className="nowrap" container rowGap={2}>
                {singleRow.map((seat: any, index: number) => {
                  return gridItem(seat, index);
                })}
              </Grid>
              <Divider className="divider" />
              <Grid direction="column" container className="nowrap" rowGap={2}>
                {doubleRow
                  .slice(0, doubleRow.length / 2)
                  .map((seat: any, index: number) => {
                    return gridItem(seat, index);
                  })}
              </Grid>
              <Box className="space"></Box>
              <Grid direction="column" className="nowrap" container rowGap={2}>
                {doubleRow
                  .slice(doubleRow.length / 2)
                  .map((seat: any, index: number) => {
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
                  <span>{detail.text}</span>
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* Upper Berth */}
        <Box className="parentContainer">
          <Box className="boxContainer upperSeatBox">
            <Grid
              direction="column"
              className="nowrap gridMargin"
              container
              rowGap={2}>
              {singleRowForUpperSeats.map((seat: any, index: number) => {
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
                .map((seat: any, index: number) => {
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
                .map((seat: any, index: number) => {
                  return gridItem(
                    seat,
                    index + doubleRowForUpperSeats.length / 2,
                  );
                })}
            </Grid>
          </Box>
        </Box>

        {/* selected seats */}
        <Box className="seatDetails">
          <SeatDetails selected={selected} />
        </Box>
      </ParentBox>
    </Fragment>
  );
}
export default Seat;
