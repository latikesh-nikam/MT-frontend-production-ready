import { Route, Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/auth';
import ViewSeats from '../../Pages/ViewSeats/viewSeats';
import Home from '../../Pages/Home/home';
import Main from '../../Pages/Main/main';
import MobileFilter from '../../Pages/MobileFilter/mobileFilter';
import SearchResults from '../../Pages/SearchResults/searchResults';
import SignIn from '../SignIn/signIn';
import ForgotPassword from '../ForgotPassword/forgotPassword';
import Signup from '../Signup/signup';
import Sort from '../Sort/sort';
import ChangePassword from '../ChangePassword/changePassword';
import BookingSuccessful from '../../Pages/BookingSuccess/bookingSuccessful';
import Payment from '../../Pages/Payment/payment';
import Sleeper from '../Sleeper/sleeper';
import Seater from '../Seater/seater';

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
        <Route path="viewSeats" element={<ViewSeats />} />
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="/filter" element={<MobileFilter />} />
      <Route path="/sleeper" element={<Sleeper />} />
      <Route path="/seater" element={<Seater />} />
      <Route path="/sort" element={<Sort />} />
      <Route path="/success" element={<BookingSuccessful />}></Route>
    </Routes>
  );
};

export default Layout;
