import { Box, Button, Tooltip } from '@mui/material';
import { Container } from './bookingSuccessful.style';
import React, { Fragment, useContext } from 'react';
import success from '../../assets/images/success.gif';
import { useNavigate } from 'react-router-dom';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';

function BookingSuccessful() {
  const navigate = useNavigate();
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  return (
    <Fragment>
      <Container>
        <img src={success} alt="success gif" />
        <h2 className="heading">{localString['bookingSuccessful']}</h2>
        <Tooltip
          title={localString['clickToViewBookingSummary']}
          placement="right">
          <p>
            {localString['bookingId']} :{' '}
            <span className="bookingId">621438</span>
          </p>
        </Tooltip>
        <Box className="buttonGroup">
          <Button variant="contained" size="small" onClick={() => navigate(-1)}>
            {localString['backToHome']}
          </Button>
          <Button variant="contained" size="small">
            {localString['downloadTicket']}
          </Button>
        </Box>
      </Container>
    </Fragment>
  );
}

export default BookingSuccessful;
