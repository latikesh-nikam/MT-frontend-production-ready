import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { BusResultsContainer } from './busResults.styles';
import { IBusResultsProps } from './busResults.type';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import BusResultCard from '../BusResultCard/busResultCard';

const BusResults = ({
  handleScroll,
  scrollerRef,
  loading,
}: IBusResultsProps) => {
  const {
    state: {
      dashboardState: {
        searchData: { data },
      },
    },
  } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  return (
    <BusResultsContainer ref={scrollerRef} onScroll={handleScroll}>
      {data.length ? (
        data.map((result: any, index: number) => {
          return <BusResultCard data={result} key={index} />;
        })
      ) : (
        <p>{localString?.noBusesFound}</p>
      )}
      {loading && <p>...{localString?.loading}</p>}
    </BusResultsContainer>
  );
};

export default BusResults;
