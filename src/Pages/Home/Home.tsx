import { useContext, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';
import { HOME_ACTIONS_MAP } from '../../reducers/homeReducer/homeReducer';
import { getData, postData } from '../../services/axios.instance';
import RecentBookings from '../../components/RecentBookings/RecentBookings';
import Search from '../../components/Search/Search';
import { ISearchInput } from '../../components/Search/search.types';
import { HomeContainer } from './home.styles';

const Home = () => {
  const [bookingsData, setBookingsData] = useState<any[]>([]);
  const navigate = useNavigate();
  const { homeDispatch, getSearchResults } = useContext(
    HomeContext,
  ) as IHomeContext;

  const getBookingsData = async () => {
    try {
      const response = await getData('user/bookings');
      setBookingsData(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // getBookingsData();
  }, []);

  const handleSearch: SubmitHandler<ISearchInput> = async data => {
    homeDispatch({ type: HOME_ACTIONS_MAP.SEARCH_FORM_DATA, payload: data });
    const { date } = data;
    try {
      const response = await getSearchResults('vehicleDetail/search', {
        ...data,
        date: date.toLocaleDateString('fr-CA'),
      });
      navigate('searchResults');
    } catch (error) {
      throw error;
    }
  };

  return (
    <HomeContainer>
      <div className="search">
        <Search handleSearch={handleSearch} />
      </div>
      <RecentBookings data={mockBookingsData} />
    </HomeContainer>
  );
};

export default Home;
