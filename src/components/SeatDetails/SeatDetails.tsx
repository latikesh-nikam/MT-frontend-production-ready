import { useEffect } from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from '../../assets/images/bookingbg.jpg';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';

import PassengerDetailsForm from '../PassengerDetails/PassengerDetailsForm';
import { SeatDetailsContainer } from './seatDetails.style';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function SeatDetails({ selected }: any) {
  const selectedSeats = selected.length > 0 ? selected : 'None';
  const [open, setOpen] = useState(false);

  const [fare, setFare] = useState(0);
  const handleFare = () => {
    setFare(600 * selected.length);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleFare();
  }, [selected]);

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
                Booking Summary
              </Typography>
            </Box>
            <Box className="source">
              <Typography variant="h5" color="text.secondary">
                Source: <span className="rightText">Pune</span>
              </Typography>
              <Typography variant="h5" color="text.secondary">
                <span className="rightText">Swargate - 9:00am</span>
              </Typography>
            </Box>
            <Box className="destination">
              <Typography variant="h5" color="text.secondary">
                Destination: <span className="rightText">Nagpur</span>
              </Typography>
              <Typography variant="h5" color="text.secondary">
                <span className="rightText">ABC Bus Stop - 12:00pm</span>
              </Typography>
            </Box>
            <Box className="seats">
              <Typography variant="h5" color="text.secondary">
                Seats Selected:{' '}
                <span className="rightText">{selectedSeats.toString()}</span>
              </Typography>
            </Box>
            <Box className="fare">
              <Typography variant="h5" color="text.secondary">
                Total Fare: <span className="rightText">Rs. {fare}</span>
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions className="buttonContainer">
          <Button
            size="small"
            color="primary"
            variant="contained"
            fullWidth
            disabled={fare === 0}
            className="button"
            onClick={handleOpen}>
            Enter Passenger Details
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400 }}>
          <PassengerDetailsForm passengerCount={selectedSeats} />
        </Box>
      </Modal>
    </SeatDetailsContainer>
  );
}
