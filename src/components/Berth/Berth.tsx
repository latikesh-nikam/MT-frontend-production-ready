import { Fragment } from 'react';
import Seat from '../Seat/Seat';
import Seater from '../Seater/Seater';
import Topbar from '../Topbar/Topbar';
import { Container } from './berth.style';

function Berth() {
  return (
    <Fragment>
      <Topbar />
      <Container>
        {/* <Seat /> */}
        <Seater />
      </Container>
    </Fragment>
  );
}

export default Berth;
