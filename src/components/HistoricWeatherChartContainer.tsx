import { FunctionComponent, useState } from 'react';
import { useQueries } from 'react-query';
import DateService from '../services/DateService';
import WeatherService from '../services/WeatherService';
import HistoricChart from './HistoricChart';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

interface IPropsHistoricWeatherContainer {
  latitude: number;
  longitude: number;
}

const HistoricWeatherContainer: FunctionComponent<IPropsHistoricWeatherContainer> = ({ latitude, longitude }) => {
  const [error, setError] = useState<string | null>(null);
  const days = [
    DateService.getDateFromGivenDaysAgo(5),
    DateService.getDateFromGivenDaysAgo(4),
    DateService.getDateFromGivenDaysAgo(3),
    DateService.getDateFromGivenDaysAgo(2),
    DateService.getDateFromGivenDaysAgo(1),
  ];

  const queryResults = useQueries(
    days.map((day) => ({
      queryKey: ['historical-data', day, longitude, latitude],
      queryFn: () => WeatherService.fetchHistoric(day, latitude, longitude),
      onError: (err: Error) => {
        setError(err.message);
      },
      // enabled: false,
    })),
  );

  if (queryResults[4].isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return queryResults.map((result) => result.isSuccess).length === 5 ? (
    <div className="container mt-4 border">
      <HistoricChart weatherData={queryResults} />
    </div>
  ) : null;
};

export default HistoricWeatherContainer;
