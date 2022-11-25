import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './auth.module.scss';

const Auth = () => {
  return (
    <Box className={styles.authPage}>
      <Outlet />
    </Box>
  );
};

export default Auth;
