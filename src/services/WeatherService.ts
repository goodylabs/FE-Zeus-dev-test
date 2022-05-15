import axios from 'axios';
import { BASE_URL } from '../constants';
import WeatherHistoricResponse from '../types/WeatherHistoricResponse';
import WeatherResponse from '../types/WeatherResponse';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

const fetchCurrent = async (query: string) => {
  const response = await apiClient.get<WeatherResponse>('data/2.5/weather', {
    params: {
      q: query,
      units: 'metric',
    },
  });
  return response.data;
};

const fetchHistoric = async (dates: number[], latitude: number, longitude: number) => {
  const cummulativeResponse: Array<WeatherHistoricResponse> = [];
  dates.forEach(async (date) => {
    const response = await apiClient.get<WeatherHistoricResponse>('data/2.5/onecall/timemachine', {
      params: {
        dt: date,
        lat: latitude,
        lon: longitude,
        units: 'metric',
      },
    });
    cummulativeResponse.push(response.data);
  });

  return cummulativeResponse;
};

const WeatherService = {
  fetchCurrent,
  fetchHistoric,
};

export default WeatherService;
