import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChairIcon from '@mui/icons-material/Chair';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider/Divider';
import image from '../../assets/images/sw.png';
import { detailsContainer, seaterMockData } from './seater.mockdata';
import { ParentBox } from './seater.style';
import SeatDetails from '../SeatDetails/seatDetails';
import { ISeatProps } from '../Sleeper/sleeper.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import BottomBar from '../../hoc/BottomBar/bottomBar';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import useWindowSize from '../../hooks/useWindowSize';

function Seater() {
  const [selected, setSelected] = useState<ISeatProps[]>([]);
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const windowWidthCondition = width < 576 && selected.length > 0;
  const windowWidth = width < 765;

  const {
    state: {
      seatState: { selectedVehicleData },
    },
  } = useContext(StoreContext) as IStoreContext;
  const { fixedFare } = selectedVehicleData;
  const berthData = selectedVehicleData.seatDetails as ISeatProps[];
  // const berthData = seaterMockData;

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

  const fare = selected.reduce(
    (current: number, sum: any) => current + sum.seatFare + fixedFare,
    0,
  );

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

  let adjacentSeatNumber = 0;

  const adjacentSeat = (seat: ISeatProps, index: number) => {
    for (let i = 0; i < dataLength / 2; i++) {
      adjacentSeatNumber = seat.seatNo - singleRow.length / 2;
      console.log(adjacentSeatNumber, seat.seatNo);
      if (seat.status === 'unavailable' && seat.bookedGender === 'female') {
        // const adjacentSeat = berthData.filter(
        //   element => element.seatNo === adjacentSeatNumber,
        // );
        console.log(adjacentSeat, 'adj seat', seat, 'seat');
      }
    }
  };

  function gridItem(seat: ISeatProps, index: number) {
    // eslint-disable-next-line no-lone-blocks
    {
      /* For Testing Purpose
    const Icon =
      seat.status === 'available' ? (
        <ChairOutlinedIcon
          titleAccess="outlineIcon"
          fontSize="medium"
        />
      ) : (
        <ChairIcon titleAccess="filledIcon" fontSize="medium" />
      ); */
    }

    const Icon = seat.status === 'available' ? ChairOutlinedIcon : ChairIcon;
    const adjacentSeatNumber = adjacentSeat(seat, index);
    return (
      <span>
        <Grid item xs={2} key={index} className="root">
          {/* For Testing Purpose
          <span
            data-testid={`mainBoxSeater`}
            className={`${classSelector(seat)} mainBox`}
            onClick={() => handleChange(seat)}>
            {Icon}
          </span> 
          */}
          <Icon
            data-testid={`mainBoxSeater`}
            fontSize="large"
            className={`${classSelector(seat)} mainBox`}
            onClick={() => handleChange(seat)}
          />
          <Typography
            component="span"
            className="count"
            onClick={() => handleChange(seat)}>
            {seat.seatNo}
          </Typography>
        </Grid>
      </span>
    );
  }

  return (
    <Fragment>
      <ParentBox>
        <Box className="parentContainer" data-testid="parentContainer">
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
          <Box className="busContainer" data-testid="busContainer">
            <img src={image} alt="drive icon" className="steeringImage" />
            <Box className="boxContainer" data-testid="boxContainer">
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
        </Box>
        {!windowWidthCondition ? (
          <Box className="seatDetails">
            <SeatDetails selected={selected} />
          </Box>
        ) : (
          <BottomBar text={localString['swipeUpForBookingSummary']} fare={fare}>
            <Box className="childrenContainer">
              <SeatDetails selected={selected} />
            </Box>
          </BottomBar>
        )}
      </ParentBox>
    </Fragment>
  );
}
export default Seater;
