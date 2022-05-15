import { FunctionComponent, useState } from 'react';
import CurrentWeatherContainer from './CurrentWeatherContainer';
import HistoricWeatherContainer from './HistoricWeatherChart';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const AppContainer: FunctionComponent = () => {
  const [location, setLocation] = useState<string>('');
  const [locationToFetch, setLocationToFetch] = useState<string>('Lodz');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<{ longitude: number; latitude: number }>({
    longitude: 0,
    latitude: 0,
  });
  const searchLocation = () => {
    if (location.length > 0) {
      setLocationToFetch(location);
    }
  };
  return (
    <div>
      <div className="mt-3 d-flex">
        <input
          className="form-control p-2 me-4 ms-2"
          name="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="provide location"
        />
        <button type="button" className="me-2 btn btn-outline-primary justify-content-end" onClick={searchLocation}>
          Search
        </button>
      </div>
      <CurrentWeatherContainer location={locationToFetch} setCoordinates={setCoordinates} setIsLoaded={setIsLoaded} />
      {isLoaded ? (
        <HistoricWeatherContainer longitude={coordinates.longitude} latitude={coordinates.latitude} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default AppContainer;
