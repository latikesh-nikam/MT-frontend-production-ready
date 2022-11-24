import { Route, Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/auth';
import Home from '../../Pages/Home/home';
import Main from '../../Pages/Main/main';
import MobileFilter from '../../Pages/MobileFilter/mobileFilter';
import SearchResults from '../../Pages/SearchResults/searchResults';
import SignIn from '../SignIn/signIn';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<SignIn />} />
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
