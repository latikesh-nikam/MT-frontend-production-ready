import { Box } from '@mui/material';
import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Search from '../../components/Search/Search';
import { ISearchInput } from '../../components/Search/Search.types';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { HOME_ACTIONS_MAP } from '../../reducers/homeReducer';
import styles from './searchResults.module.scss';
import Filter from '../../components/Filter/Filter';

const SearchResults = () => {
  const { homeDispatch } = useContext(HomeContext) as IHomeContext;

  const handleSearch: SubmitHandler<ISearchInput> = data => {
    homeDispatch({ type: HOME_ACTIONS_MAP.SEARCH_FORM_DATA, payload: data });
  };
  return (
    <Box className={styles.searchResultsPage}>
      <Box className={styles.search}>
        <Search handleSearch={handleSearch} />
      </Box>
      <Box className={styles.searResultsMain}>
        <Box className={styles.filter}>
          <Filter />
        </Box>
        <Box className={styles.searchRresults}></Box>
      </Box>
    </Box>
  );
};

export default SearchResults;
