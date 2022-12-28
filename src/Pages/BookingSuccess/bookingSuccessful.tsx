import { Box, Button, Tooltip } from '@mui/material';
import { Container } from './bookingSuccessful.style';
import React, { Fragment } from 'react';
import success from '../../assets/images/success.gif';
import { useNavigate } from 'react-router-dom';

function BookingSuccessful() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Container>
        <img src={success} alt="success gif" />
        <h2 className="heading">Booking Successful</h2>
        <Tooltip title="Click to view Booking Summary" placement="right">
          <p>
            Booking Id : <span className="bookingId">621438</span>
          </p>
        </Tooltip>
        <Box className="buttonGroup">
          <Button variant="contained" size="small" onClick={() => navigate(-1)}>
            Back to Home
          </Button>
          <Button variant="contained" size="small">
            Download Ticket
          </Button>
        </Box>
      </Container>
    </Fragment>
  );
}

export default BookingSuccessful;
