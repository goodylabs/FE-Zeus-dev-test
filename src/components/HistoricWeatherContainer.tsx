import { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import getDate from '../services/getDateService';
import WeatherService from '../services/WeatherService';
import WeatherResponse from '../types/WeatherResponse';

interface IPropsHistoricWeatherContainer {
  location: string;
}

const HistoricWeatherContainer: FunctionComponent<IPropsHistoricWeatherContainer> = ({ location }) => {
  const [error, setError] = useState<string | null>(null);
  const {
    isLoading: isLoadingWeatherReport,
    isSuccess: isSuccessWeatherReport,
    isError: isErrorWeatherReport,
    data: weatherReport,
    refetch: smh,
  } = useQuery<WeatherResponse, Error>(
    'default-query-historic-weather',
    async () => WeatherService.fetchHistoric(`${location.length > 0 ? location : 'Lodz'}`, getDate()),
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

export default HistoricWeatherContainer;
