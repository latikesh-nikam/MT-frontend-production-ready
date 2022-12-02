import { Toolbar } from '@mui/material';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/Auth';
import Home from '../../Pages/Home/Home';
import Main from '../../Pages/Main/Main';
import MobileFilter from '../../Pages/MobileFilter/MobileFilter';
import SearchResults from '../../Pages/SearchResults/SearchResults';
import SignIn from '../SignIn/SignIn';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Signup from '../Signup/Signup';
import Topbar from '../Topbar/Topbar';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>
      <Route path="/home" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="filter" element={<MobileFilter />} />
      </Route>
      <Route path="/topbar" element={<Topbar />}></Route>
    </Routes>
  );
};

export default Layout;
