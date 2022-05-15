import { useState } from 'react';
import CurrentWeatherContainer from './CurrentWeatherContainer';
import HistoricWeatherContainer from './HistoricWeatherContainer';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const AppContainer = () => {
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
      <div className="mt-4 d-flex">
        <input
          className="form-control p-2"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="provide location"
        />
        <button type="button" className="btn btn-outline-primary justify-content-end" onClick={searchLocation}>
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
