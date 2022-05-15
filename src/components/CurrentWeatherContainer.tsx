import { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import WeatherService from '../services/WeatherService';
import WeatherResponse from '../types/WeatherResponse';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import WeatherCard from './WeatherCard/WeatherCard';

interface IPropsCurrentWeatherContainer {
  location: string;
  setCoordinates: React.Dispatch<
    React.SetStateAction<{
      longitude: number;
      latitude: number;
    }>
  >;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentWeatherContainer: FunctionComponent<IPropsCurrentWeatherContainer> = ({
  location,
  setCoordinates,
  setIsLoaded,
}) => {
  const [error, setError] = useState<string | null>(null);
  const { isLoading, isSuccess, isError, data, refetch } = useQuery<WeatherResponse, Error>(
    ['query-current-weather', location],
    async () => WeatherService.fetchCurrent(location),
    {
      // enabled: false,
      onSuccess: (res: WeatherResponse) => {
        setCoordinates({ longitude: res.coord.lon, latitude: res.coord.lat });
        setIsLoaded(true);
      },
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

  return isSuccess ? (
    <>
      <button type="button" className="btn btn-primary" onClick={() => refetch()}>
        refetch
      </button>
      <WeatherCard weatherReport={data} />
    </>
  ) : null;
};

export default CurrentWeatherContainer;
