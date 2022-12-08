import { useContext, useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { ISearchInput } from '../../components/Search/search.types';
import { HOME_ACTIONS_MAP } from '../../reducers/homeReducer/homeReducer';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import { SearchResultsContainer } from './searchResults.styles';
import Sort from '../../components/SortComponent/Sort';
import Divider from '@mui/material/Divider/Divider';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { IFilterInput } from '../../components/Filter/filter.types';
import { useNavigate } from 'react-router-dom';
import BusResults from '../../components/BusResults/BusResults';

const SearchResults = () => {
  const { homeDispatch, getSearchResults } = useContext(
    HomeContext,
  ) as IHomeContext;
  const navigate = useNavigate();

  const handleSearch: SubmitHandler<ISearchInput> = async data => {
    homeDispatch({ type: HOME_ACTIONS_MAP.SEARCH_FORM_DATA, payload: data });
    try {
      const response = await getSearchResults('vehicleDetail/search', {
        ...data,
        date: data.date.toLocaleDateString('fr-CA'),
      });
    } catch (error) {
      throw error;
    }
  };

  const handleFilter = (data: IFilterInput) => {
    homeDispatch({
      type: HOME_ACTIONS_MAP.FILTER_FORM_DATA,
      payload: { ...data, isFiltered: true },
    });
  };

  const handleFilterIcon = () => {
    navigate('/home/filter');
  };

  // useEffect(()=> {
  //   getSearchResults("vehicleDetails/search")
  // },[])

  return (
    <SearchResultsContainer>
      <div className="search">
        <Search handleSearch={handleSearch} />
      </div>
      <div className="searResultsMain">
        <aside className="sidebar">
          <Sort />
          <Divider />
          <Filter handleFilter={handleFilter} />
        </aside>
        <div className="searchRresults">
          <BusResults />
        </div>
      </div>
      <div className="filterIcon" onClick={handleFilterIcon}>
        <TuneOutlinedIcon />
      </div>
    </SearchResultsContainer>
  );
};

export default SearchResults;
