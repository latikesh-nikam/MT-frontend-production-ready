import { Box } from '@mui/material';
import Search from '../../components/Search/Search';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Box className={styles.homePage}>
      <Box className={styles.search}>
        <Search />
      </Box>
      <Box className={styles.bookings}></Box>
    </Box>
  );
};

export default Home;
