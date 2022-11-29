import { Box } from '@mui/material';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BookingsCard from '../../components/BookingsCard/BookingsCard';
import Search from '../../components/Search/Search';
import { ISearchInput } from '../../components/Search/Search.types';
import {HomeContext} from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';
import { HOME_ACTIONS_MAP } from '../../reducers/homeReducer';
import { getData } from '../../services/http';
import styles from './Home.module.scss';

const Home = () => {
  const [bookingsData, setBookingsData] = useState<any[]>([]);

  const navigate = useNavigate();

  const {homeDispatch} = useContext(HomeContext) as IHomeContext
  const getBookingsData = async () => {
    try {
      const response = await getData('user/bookings');
      console.log(response);
      setBookingsData(response.data);
    } catch (error) {
      throw error;
    }
  };

  const handleSearch:SubmitHandler<ISearchInput> = async(data) => {
    homeDispatch({type:HOME_ACTIONS_MAP.SEARCH_FORM_DATA, payload:data});
    // const {adults,children,from,to,date} = data;
    navigate("searchResults");
  }

  useEffect(() => {
    getBookingsData();
  }, []);
  return (
    <Box className={styles.homePage}>
      <Box className={styles.search}>
        <Search handleSearch={handleSearch}/>
      </Box>
      
        <BookingsCard data={mockBookingsData} />
      
    </Box>
  );
};

export default Home;
