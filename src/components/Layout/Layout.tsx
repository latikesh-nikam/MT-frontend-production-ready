import { Route, Routes } from 'react-router-dom';
import Auth from '../../Pages/Auth/Auth';
import Home from '../../Pages/Home/Home';
import Main from '../../Pages/Main/Main';
import SearchResults from '../../Pages/SearchResults/SearchResult';
import SignIn from '../SignIn/SignIn';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<SignIn />} />
      </Route>
      <Route path="/home" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="searchResults" element={<SearchResults />} />
      </Route>
    </Routes>
  );
};

export default Layout;
