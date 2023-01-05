import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import Box from '@mui/material/Box/Box';
import CardActions from '@mui/material/CardActions/CardActions';
import Button from '@mui/material/Button/Button';
import Modal from '@mui/material/Modal/Modal';
import image from '../../assets/images/bookingbg.jpg';
import { SeatDetailsContainer } from './seatDetails.style';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { style } from './seatDetails.data';
import PassengerDetails from '../PassengerDetails/passengerDetails';
import PDFGenerator from '../../hoc/PDFGenerator/pdfGenerator';
import BookingSuccessful from '../../Pages/BookingSuccess/bookingSuccessful';

export default function SeatDetails({ selected }: any) {
  const [open, setOpen] = useState(false);
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const {
    state: {
      seatState: {
        selectedVehicleData: { fixedFare, station },
      },
      dashboardState: {
        searchFormData: { from, to },
      },
    },
  } = useContext(StoreContext) as IStoreContext;

  const [departure, ...stations] = station;
  const arrival = station.slice(-1)[0];

  const fare = selected.reduce(
    (current: number, sum: any) => current + sum.seatFare + fixedFare,
    0,
  );

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SeatDetailsContainer>
      <Card className="cardContainer">
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt="image"
            className="image"
          />
          <CardContent className="cardContent">
            <Box className="heading">
              <Typography gutterBottom variant="h3" component="div">
                {localString?.bookingSummary}
              </Typography>
            </Box>
            <Box className="source">
              <Typography variant="h5" color="text.secondary">
                {localString?.source}:{' '}
                <span className="rightText">
                  {departure.sourceName} - {departure.sourceDepartureTime}
                </span>
              </Typography>
            </Box>
            <Box className="destination">
              <Typography variant="h5" color="text.secondary">
                {localString?.destination}:{' '}
                <span className="rightText">
                  {arrival.sourceName} - {arrival.sourceDepartureTime}
                </span>
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
          </CardContent>
        </CardActionArea>
        <Box className="buttonContainer">
          <Button
            size="small"
            color="primary"
            variant="contained"
            fullWidth
            disabled={fare === 0}
            className="button"
            onClick={handleOpen}>
            {localString?.enterPassengerDetails}
          </Button>
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400 }}>
          <PassengerDetails passengerCount={selected} showModal={setOpen} />
        </Box>
      </Modal>
    </SeatDetailsContainer>
  );
}
