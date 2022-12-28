import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/Auth';
import Berth from '../../Pages/ViewSeats/viewSeats';
import Home from '../../Pages/Home/Home';
import Main from '../../Pages/Main/Main';
import MobileFilter from '../../Pages/MobileFilter/MobileFilter';
import SearchResults from '../../Pages/SearchResults/SearchResults';
import SignIn from '../SignIn/signIn';
import ForgotPassword from '../ForgotPassword/forgotPassword';
import Seat from '../Sleeper/sleeper';
import Signup from '../Signup/signup';
import Sort from '../Sort/sort';
import Topbar from '../Topbar/topbar';
import ChangePassword from '../ChangePassword/changePassword';
import BookingSuccessful from '../../Pages/BookingSuccess/bookingSuccessful';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="changePassword" element={<ChangePassword />} />
      </Route>
      <Route path="/home" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="viewSeats" element={<Berth />} />
        <Route path="filter" element={<MobileFilter />} />
      </Route>
      <Route path="/seat" element={<Seat />} />
      <Route path="/sort" element={<Sort />} />
      <Route path="/topbar" element={<Topbar />}></Route>
      <Route path="/success" element={<BookingSuccessful />}></Route>
    </Routes>
  );
};

export default Layout;
