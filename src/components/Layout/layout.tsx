import { Route, Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/auth';
import Berth from '../../Pages/ViewSeats/viewSeats';
import Home from '../../Pages/Home/home';
import Main from '../../Pages/Main/main';
import MobileFilter from '../../Pages/MobileFilter/mobileFilter';
import SearchResults from '../../Pages/SearchResults/searchResults';
import SignIn from '../SignIn/signIn';
import ForgotPassword from '../ForgotPassword/forgotPassword';
import Seat from '../Sleeper/sleeper';
import Signup from '../Signup/signup';
import Sort from '../Sort/sort';
import Topbar from '../Topbar/topbar';
import ChangePassword from '../ChangePassword/changePassword';
import BookingSuccessful from '../../Pages/BookingSuccess/bookingSuccessful';
import Payment from '../../Pages/Payment/payment';

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
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="/seat" element={<Seat />} />
      <Route path="/sort" element={<Sort />} />
      <Route path="/topbar" element={<Topbar />}></Route>
      <Route path="/success" element={<BookingSuccessful />}></Route>
    </Routes>
  );
};

export default Layout;
