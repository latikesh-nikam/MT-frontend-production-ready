import { useNavigate } from 'react-router-dom';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Divider from '@mui/material/Divider/Divider';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/Sort/Sort';
import BusResults from '../../components/BusResults/BusResults';
import { SearchResultsContainer } from './searchResults.styles';
import InfiniteScroll from '../../components/InfiniteScroll/InifiniteScroll';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { routes } from '../../constants/route';
import { pageNumberAction } from '../../context/actions/dashboardActions/dashboardActions';

const SearchResults = () => {
  const {
    dispatch,
    getSearchResults,
    state: {
      dashboardState: {
        pageNumber,
        searchFormData: { date, ...search },
      },
    },
  } = useContext(StoreContext) as IStoreContext;
  const navigate = useNavigate();

  const handleFilterIcon = () => {
    navigate(routes.filterRoute);
  };

  const handlePageNumber = () => {
    dispatch(pageNumberAction(pageNumber + 1));
  };

  const getSearchData = async () => {
    await getSearchResults({
      ...search,
      date: date.getTime(),
      filterBy: {},
    });
  };

  useEffect(() => {
    if (pageNumber > 0) {
      getSearchData();
    }
  }, [pageNumber]);

  return (
    <SearchResultsContainer>
      <div className="search">
        <Search />
      </div>
      <div className="searResultsMain">
        <aside className="sidebar">
          <Sort />
          <Divider />
          <Filter />
        </aside>
        <div className="searchRresults">
          <InfiniteScroll
            handlePageChange={handlePageNumber}
            Component={BusResults}
          />
        </div>
      </div>
      <div className="filterIcon" onClick={handleFilterIcon}>
        <TuneOutlinedIcon />
      </div>
    </SearchResultsContainer>
  );
};

export default SearchResults;
