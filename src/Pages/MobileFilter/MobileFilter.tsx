import Divider from '@mui/material/Divider/Divider';
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/Sort/Sort';
import { routes } from '../../constants/route';
import { MobileFilterContainer } from './mobile.styles';

const MobileFilter = () => {
  return (
    <MobileFilterContainer>
      <div className="sidebar">
        <Sort navigateTo={routes.searcResultsFilterRoute} />
        <Divider />
        <Filter navigateTo={routes.searcResultsFilterRoute} />
      </div>
    </MobileFilterContainer>
  );
};

export default MobileFilter;
