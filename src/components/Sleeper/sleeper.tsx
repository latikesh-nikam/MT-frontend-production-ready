import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Divider from '@mui/material/Divider/Divider';
import image from '../../assets/images/sw.png';
import SeatDetails from '../SeatDetails/seatDetails';
import { ParentBox } from './sleeper.style';
import { ISeatProps } from './sleeper.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import BottomBar from '../../hoc/BottomBar/bottomBar';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { detailsContainer, sleeperMockData } from './sleeperMockData';
import useWindowSize from '../../hooks/useWindowSize';

function Sleeper() {
  const [selected, setSelected] = useState<ISeatProps[]>([]);
  const navigate = useNavigate();
  const {
    state: {
      seatState: { selectedVehicleData },
    },
  } = useContext(StoreContext) as IStoreContext;
  const { fixedFare } = selectedVehicleData;

  const { width } = useWindowSize();
  const windowWidthCondition = width < 576 && selected.length > 0;
  const windowWidth = width < 576;

  const berthData = selectedVehicleData.seatDetails as ISeatProps[];
  // const berthData = sleeperMockData;

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

  function gridItem(seat: ISeatProps, index: number) {
    return (
      <Grid item xs={2} key={index}>
        <Box
          data-testid={`mainBox`}
          key={index}
          className={`${classSelector(seat)} mainBox`}
          onClick={() => {
            handleChange(seat);
          }}>
          <p className="id">{seat.seatNo}</p>
          <Box
            data-testid={`smallBox`}
            key={index + seat.seatNo}
            className={`${classSelector(seat)} smallBox`}></Box>
        </Box>
      </Grid>
    );
  }

  return (
    <Fragment>
      <ParentBox data-testid="parentContainerLower">
        <Box className="closeButton" onClick={() => navigate(-1)}>
          {windowWidth ? (
            <ClearIcon />
          ) : (
            <p className="closeButtonText">Back to Search Results</p>
          )}
        </Box>
        <Box className="seats">
          <Box className="busContainer" data-testid="busContainerLower">
            <img src={image} alt="drive icon" className="steeringImage" />
            <Box className="boxContainer" data-testid="boxContainerLower">
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

          <Box
            className="boxContainer upperSeatBox"
            data-testid="boxContainerUpper">
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

        {!windowWidthCondition ? (
          <Box className="seatDetails">
            <SeatDetails selected={selected} />
          </Box>
        ) : (
          <BottomBar text={localString['swipeUpForBookingSummary']} fare={fare}>
            {' '}
            <Box className="childrenContainer">
              <SeatDetails selected={selected} />
            </Box>
          </BottomBar>
        )}
      </ParentBox>
    </Fragment>
  );
}
export default Sleeper;
