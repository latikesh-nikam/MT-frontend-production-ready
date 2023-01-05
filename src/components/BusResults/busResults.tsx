import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { BusResultsContainer } from './busResults.styles';
import { IBusResultsProps } from './busResults.type';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import BusResultCard from '../BusResultCard/busResultCard';
import { epochDate } from '../../utils/utility';

const BusResults = ({
  handleScroll,
  scrollerRef,
  loading,
}: IBusResultsProps) => {
  const {
    state: {
      dashboardState: {
        searchData: { data },
        searchFormData: { from, to, date },
      },
    },
    getSearchResults,
  } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  useEffect(() => {
    if (from && to && date) {
      getSearchResults({
        from: from,
        to: to,
        date: epochDate(date),
      });
    }
  }, []);

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
