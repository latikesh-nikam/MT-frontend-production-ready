import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { BusResultsContainer } from './busResults.styles';
import BusResultCard from '../BusResultCard/BusResultCard';
import { IBusResultsProps } from './busResults.type';

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


  return (
    <BusResultsContainer ref={scrollerRef} onScroll={handleScroll}>
      {data?.length > 0 ? (
        data.map((result: any, index: number) => {
          return <BusResultCard data={result} key={index} />;
        })
      ) : (
        <p>No buses Found</p>
      )}
      {loading && <p>...Loading</p>}
    </BusResultsContainer>
  );
};

export default BusResults;
