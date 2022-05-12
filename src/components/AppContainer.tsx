import { useState } from 'react';
import CurrentWeatherContainer from './CurrentWeatherContainer';
import HistoricWeatherContainer from './HistoricWeatherContainer';

const AppContainer = () => {
  const [location, setLocation] = useState<string>('');
  const searchLocation = () => {
    if (location.length > 0) {
      console.log('e');
    }
  };
  return (
    <div>
      <div>
        <input
          className="input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="provide location"
        />
      </div>
      <div>
        <button type="button" className="button" onClick={searchLocation}>
          Search
        </button>
      </div>
      <CurrentWeatherContainer location={location} />
      <HistoricWeatherContainer location={location} />
    </div>
  );
};

export default AppContainer;
