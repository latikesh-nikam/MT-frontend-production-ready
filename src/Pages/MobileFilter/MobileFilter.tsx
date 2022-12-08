import Divider from '@mui/material/Divider/Divider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import { IFilterInput } from '../../components/Filter/filter.types';
import Sort from '../../components/SortComponent/Sort';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { HOME_ACTIONS_MAP } from '../../reducers/homeReducer/homeReducer';
import { MobileFilterContainer } from './mobile.styles';

const MobileFilter = () => {
  const { homeDispatch } = useContext(HomeContext) as IHomeContext;
  
  const navigate = useNavigate();

  const handleFilter = (data: IFilterInput) => {
    console.log(data);
    homeDispatch({
      type: HOME_ACTIONS_MAP.FILTER_FORM_DATA,
      payload: { ...data, isFiltered: true },
    });
    navigate('/home/searchResults');
  };

  return (
    <MobileFilterContainer>
      <div className="sidebar">
        <Sort />
        <Divider />
        <Filter handleFilter={handleFilter} />
      </div>
    </MobileFilterContainer>
  );
};

export default MobileFilter;
