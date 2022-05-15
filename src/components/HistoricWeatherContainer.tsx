import { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import DateService from '../services/DateService';
import WeatherService from '../services/WeatherService';
import WeatherHistoricResponse from '../types/WeatherHistoricResponse';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

interface IPropsHistoricWeatherContainer {
  latitude: number;
  longitude: number;
}

const HistoricWeatherContainer: FunctionComponent<IPropsHistoricWeatherContainer> = ({ latitude, longitude }) => {
  const [error, setError] = useState<string | null>(null);
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const days = [
    DateService.getDateFromGivenDaysAgo(5),
    DateService.getDateFromGivenDaysAgo(4),
    DateService.getDateFromGivenDaysAgo(3),
    DateService.getDateFromGivenDaysAgo(2),
    DateService.getDateFromGivenDaysAgo(1),
  ];
  // const labels: Array<string> = [];

  const { isLoading, isSuccess, isError, data } = useQuery<WeatherHistoricResponse[], Error>(
    ['query-historic-weather', latitude, longitude],
    async () => WeatherService.fetchHistoric(days, latitude, longitude),
    {
      // enabled: false,
      onError: (err: Error) => {
        setError(err.message);
      },
    },
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  return data?.length === 5 && isSuccess ? (
    <div>
      {data.map((report) => (
        <div key={report.current.dt}>{DateService.getTimeFromEpoch(report.current.dt)}</div>
      ))}
    </div>
  ) : null;
};

export default HistoricWeatherContainer;
