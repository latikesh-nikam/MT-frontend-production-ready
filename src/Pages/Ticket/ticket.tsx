import BookingDetails from '../../components/BookingDetails/bookingDetails';
import PDFGenerator from '../../hoc/PDFGenerator/pdfGenerator';
import { TicketContainer } from './ticket.styles';

const Ticket = () => {
  return (
    <TicketContainer>
      <div className="downloadButton">
        <PDFGenerator
          buttonText="Download Ticket"
          component={BookingDetails}
          icon
        />
      </div>
      <BookingDetails />
    </TicketContainer>
  );
};

export default Ticket;
