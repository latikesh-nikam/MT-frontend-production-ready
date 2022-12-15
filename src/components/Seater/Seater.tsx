import { Fragment } from 'react';
import { useState } from 'react';

import WeekendIcon from '@mui/icons-material/Weekend';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';

import image from '../../assets/images/sw.png';
import SeatDetails from '../SeatDetails/SeatDetails';
import { detailsContainer } from './seater.mockdata';
import { seatDetails } from './seater.mockdata';

import { ParentBox } from './seater.style';

type ISeatProps = {
  id: number;
  status: 'available' | 'unavailable' | 'selected';
  bookedGender: 'female' | 'male';
};

function Seater() {
  const [selected, setSelected] = useState<number[]>([]);

  function classSelector(seat: any) {
    if (selected.includes(seat.id)) {
      seat.status = 'unavailable';
    }
    const capitalizedText =
      seat.status.slice(0, 1).toUpperCase() +
      seat.status.slice(1, seat.status.length);
    return `${seat.bookedGender}${capitalizedText}`;
  }

  const handleChange = (seat: any) => {
    if (seat.status === 'unavailable') {
      if (selected.includes(seat.id)) {
        setSelected(selected.filter(element => element !== seat.id));
        seat.status = 'available';
      } else {
        return;
      }
    } else {
      if (selected.includes(seat.id)) {
        setSelected(selected.filter(element => element !== seat.id));
        seat.status = seat.status === 'available' ? 'unavailable' : 'available';
      } else {
        selected.push(seat.id);
        setSelected([...selected]);
      }
    }
  };

  const dataLength = seatDetails.length;

  const singleRow = seatDetails.slice(0, dataLength / 2);

  const doubleRow = seatDetails.slice(dataLength / 2, dataLength);

  function gridItem(seat: any, index: number) {
    return (
      <Grid item xs={2} key={index} className="root">
        <WeekendIcon
          fontSize="large"
          className={classSelector(seat) + ' ' + 'mainBox'}
          onClick={() => handleChange(seat)}
        />
        <Typography
          component="span"
          className="count"
          onClick={() => handleChange(seat)}>
          {seat.id}
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
                  .map((seat: any, index: number) => {
                    return gridItem(seat, index);
                  })}
              </Grid>
              <Grid direction="column" className="nowrap" container rowGap={2}>
                {singleRow
                  .slice(singleRow.length / 2)
                  .map((seat: any, index: number) => {
                    return gridItem(seat, index + singleRow.length / 2);
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
        <Box className="seatDetails">
          <SeatDetails selected={selected} />
        </Box>
      </ParentBox>
    </Fragment>
  );
}
export default Seater;
