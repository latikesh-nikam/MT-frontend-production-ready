import { Box, Divider, Grid, Stack } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { ParentBox } from './seat.style';
import image from '../../assets/images/sw.png';
import SeatDetails from '../SeatDetails/SeatDetails';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { detailsContainer, seatDetails } from './seatMockData';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

type ISeatProps = {
  id: number;
  status: 'available' | 'unavailable' | 'selected';
  bookedGender: 'female' | 'male';
};

function Seat() {
  const [selected, setSelected] = useState<number[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const singleRow = seatDetails.slice(0, dataLength / 3);

  const doubleRow = seatDetails.slice(dataLength / 3, dataLength);

  function gridItem(seat: any, index: number) {
    return (
      <Grid item xs={2} key={index}>
        <Box
          key={index}
          className={classSelector(seat) + ' ' + 'mainBox'}
          onClick={() => handleChange(seat)}>
          <p className="id">{seat.id}</p>
          <Box
            key={index + seat.id}
            className={classSelector(seat) + ' ' + 'smallBox'}
            onClick={() => handleChange(seat)}></Box>
        </Box>
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
        <Box className="seatDetails">
          <SeatDetails selected={selected} />
        </Box>
      </ParentBox>
    </Fragment>
  );
}
export default Seat;
