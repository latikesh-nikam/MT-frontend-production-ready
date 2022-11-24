import RecentBookings from '../../components/RecentBookings/recentBookings';
import Search from '../../components/Search/search';
import { HomeContainer } from './home.styles';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';
import { routes } from '../../constants/route';

const Home = () => {
  return (
    <HomeContainer>
      <div className="search">
        <Search navigateTo={routes.searcResultsRoute} />
      </div>
      <RecentBookings data={mockBookingsData} />
    </HomeContainer>
  );
};

export default Home;
