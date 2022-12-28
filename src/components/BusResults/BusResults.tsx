import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { BusResultsContainer } from './busResults.styles';
import BusResultCard from '../BusResultCard/busResultCard';
import { IBusResultsProps } from './busResults.type';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';

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
      {data?.length ? (
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
