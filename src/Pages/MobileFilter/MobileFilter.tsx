import Divider from '@mui/material/Divider/Divider';
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/SortComponent/Sort';
import { searcResultsFilterRoute } from '../../constants/routeConstants';
import { MobileFilterContainer } from './mobile.styles';

const MobileFilter = () => {
  return (
    <MobileFilterContainer>
      <div className="sidebar">
        <Sort navigateTo={searcResultsFilterRoute}/>
        <Divider />
        <Filter navigateTo={searcResultsFilterRoute} />
      </div>
    </MobileFilterContainer>
  );
};

export default MobileFilter;
