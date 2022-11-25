import { Route, Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/Auth';
import SignIn from '../SignIn/SignIn';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default Layout;
