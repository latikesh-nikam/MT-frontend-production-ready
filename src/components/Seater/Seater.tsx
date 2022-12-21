import { Fragment } from 'react';
import { useState } from 'react';

import ChairIcon from '@mui/icons-material/Chair';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';

import image from '../../assets/images/sw.png';
import { berthData } from '../Berth/berth.mockData';
import { detailsContainer } from './seater.mockdata';

import { ParentBox } from './seater.style';
import SeatDetails from '../SeatDetails/SeatDetails';
import { ISeatProps } from '../Seat/seat.types';

function Seater() {
  const [selected, setSelected] = useState<ISeatProps[]>([]);

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
        setSelected(selected.filter(element => element.seatNo !== seat.seatNo));
        seat.status = 'available';
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
        selected.push(seat);
        setSelected([...selected]);
      }
    }
  };

  const dataLength = berthData.length;

  const singleRow = berthData.slice(0, dataLength / 2);

  const doubleRow = berthData.slice(dataLength / 2, dataLength);

  function gridItem(seat: ISeatProps, index: number) {
    const Icon = seat.status === 'available' ? ChairOutlinedIcon : ChairIcon;
    return (
      <Grid item xs={2} key={index} className="root">
        <Icon
          fontSize="large"
          className={classSelector(seat) + ' ' + 'mainBox'}
          onClick={() => handleChange(seat)}
        />
        <Typography
          component="span"
          className="count"
          onClick={() => handleChange(seat)}>
          {seat.seatNo}
        </Typography>
      </Grid>
    );
  }
  console.log(selected);

  return (
    <Fragment>
      <ParentBox>
        <Box className="parentContainer">
          <Box className="busContainer">
            <img src={image} alt="drive icon" className="steeringImage" />
            <Box className="boxContainer">
              <Grid direction="column" className="nowrap" container rowGap={2}>
                {singleRow
                  .slice(0, singleRow.length / 2)
                  .map((seat: ISeatProps, index: number) => {
                    return gridItem(seat, index);
                  })}
              </Grid>
              <Grid direction="column" className="nowrap" container rowGap={2}>
                {singleRow
                  .slice(singleRow.length / 2)
                  .map((seat: ISeatProps, index: number) => {
                    return gridItem(seat, index + singleRow.length / 2);
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
            {detailsContainer.map((detail, index) => {
              return (
                <Box className="singleLegend" key={index}>
                  <Box className={detail.classname}></Box>
                  <span>{detail.text}</span>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className="berthData">
          <SeatDetails selected={selected} />
        </Box>
      </ParentBox>
    </Fragment>
  );
}
export default Seater;
