import { forwardRef, Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import success from '../../assets/images/success.gif';
import { Container } from './bookingSuccessful.style';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import PDFGenerator from '../../hoc/PDFGenerator/pdfGenerator';
import { routes } from '../../constants/route';
import Topbar from '../../components/Topbar/topbar';

function BookingSuccessful(props: any, ref: any) {
  const navigate = useNavigate();
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  return (
    <Fragment>
      <Topbar />
      <Container>
        <Box className="contents">
          <img src={success} alt="success gif" />
          <h2 className="heading">{localString['bookingSuccessful']}</h2>

          <Box className="bookingDetails">
            <span className="bookingId">
              {localString['viewBookingDetails']}
            </span>
            <span className="icon">
              <ArrowCircleRightTwoToneIcon fontSize="medium" />
            </span>
          </Box>

          <Box className="buttonGroup">
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate(routes.homeRoute)}>
              {localString['backToHome']}
            </Button>
            <Button variant="contained" size="small">
              {localString['downloadTicket']}
            </Button>
            {/* <PDFGenerator
            buttonText={localString['downloadTicket']}
            component={seater}
            icon
          /> */}
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

export default forwardRef(BookingSuccessful);
