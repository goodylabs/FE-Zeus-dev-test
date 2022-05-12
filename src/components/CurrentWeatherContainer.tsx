import { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import WeatherService from '../services/WeatherService';
import WeatherResponse from '../types/WeatherResponse';

interface IPropsCurrentWeatherContainer {
  location: string;
}

const CurrentWeatherContainer: FunctionComponent<IPropsCurrentWeatherContainer> = ({ location }) => {
  const [error, setError] = useState<string | null>(null);
  const {
    isLoading: isLoadingWeatherReport,
    isSuccess: isSuccessWeatherReport,
    isError: isErrorWeatherReport,
    data: weatherReport,
    refetch: smh,
  } = useQuery<WeatherResponse, Error>(
    'default-query-weather',
    async () => WeatherService.fetchCurrent(`${location.length > 0 ? location : 'Lodz'}`),
    {
      enabled: false,
      onError: (err: any) => {
        setError(err.response?.data || error);
      },
    },
  );

  if (isLoadingWeatherReport) {
    return <div>loading</div>;
  }

  if (isErrorWeatherReport) {
    return <div>error</div>;
  }

  return isSuccessWeatherReport ? <div>{weatherReport?.current.feelslike}</div> : null;
};

export default CurrentWeatherContainer;
