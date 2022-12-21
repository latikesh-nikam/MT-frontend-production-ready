import RecentBookings from '../../components/RecentBookings/RecentBookings';
import Search from '../../components/Search/Search';
import { HomeContainer } from './home.styles';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';
import { searcResultsRoute } from '../../constants/routeConstants';

const Home = () => {
  return (
    <HomeContainer>
      <div className="search">
        <Search navigateTo={searcResultsRoute} />
      </div>
      <RecentBookings data={mockBookingsData} />
    </HomeContainer>
  );
};

export default Home;
