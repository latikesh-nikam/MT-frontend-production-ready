import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from '../../assets/images/bg.jpg';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { SeatDetailsContainer } from './seatDetails.style';

export default function SeatDetails({ selected }: any) {
  const selectedSeats = selected.length > 0 ? selected : 'None';
  const [fare, setFare] = useState(0);
  const handleFare = () => {
    setFare(600 * selected.length);
  };
  useEffect(() => {
    handleFare();
  }, [selected]);
  return (
    <SeatDetailsContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="250" image={image} alt="image" />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h3" component="div">
              Booking Details
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Source: Pune
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Destination: Nagpur
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Seats Selected: {selectedSeats.toString()}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Total Fare: Rs. {fare}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            fullWidth
            disabled={fare === 0}>
            Proceed to Payment
          </Button>
        </CardActions>
      </Card>
    </SeatDetailsContainer>
  );
}
