import { Route, Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/Auth';
import Home from '../../Pages/Home/Home';
import Main from '../../Pages/Main/Main';
import MobileFilter from '../../Pages/MobileFilter/MobileFilter';
import SearchResults from '../../Pages/SearchResults/SearchResults';
import SignIn from '../SignIn/SignIn';
import Signup from '../Signup/Signup';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route index element={<Signup />} />
      </Route>
      <Route path="/home" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="filter" element={<MobileFilter />} />
      </Route>
    </Routes>
  );
};

export default Layout;
