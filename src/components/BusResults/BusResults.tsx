import { useContext } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { BusResultsContainer } from './busResults.styles';

const BusResults = () => {
  const {
    homeState: { searchData },
  } = useContext(HomeContext) as IHomeContext;
  console.log(searchData);

  return (
    <BusResultsContainer>
      {searchData.source?.map((station: any, index: number) => {
        const destination = searchData.destination[index];
        return (
          <div className="busResultCard" key={station.station_id}>
            <div className="stationContainer">
              <div className="stations">
                <h3>{station.source_name}</h3>{' '}
                <span className="icon">
                  <ArrowForwardIcon />
                </span>{' '}
                <h3>{destination.source_name}</h3>
              </div>
              <div className="time">
                <p>{station.departure_time}</p>
                <p>{station.totalDurationFromSource} hrs</p>
                <p>{destination.arrival_time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </BusResultsContainer>
  );
};

export default BusResults;
