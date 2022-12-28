import { useContext, useEffect } from 'react';
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

import PassengerDetailsForm from '../PassengerDetails/passengerDetailsForm';
import { SeatDetailsContainer } from './seatDetails.style';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';

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
  console.log(selected, 'selected');
  const [open, setOpen] = useState(false);
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const {
    state: {
      seatState: {
        selectedVehicleData: { fixedFare },
      },
    },
  } = useContext(StoreContext) as IStoreContext;

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

  console.log(fixedFare, 'fixedFare');

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
            {localString?.enterPassengerDetails}
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400 }}>
          <PassengerDetailsForm passengerCount={selected} />
        </Box>
      </Modal>
    </SeatDetailsContainer>
  );
}
