import axios from 'axios';
import { BASE_URL } from '../constants';
import WeatherResponse from '../types/WeatherResponse';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    access_key: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

const fetchCurrent = async (query: string) => {
  const response = await apiClient.get<WeatherResponse>('current', {
    params: {
      query,
    },
  });
  return response.data;
};

const fetchHistoric = async (query: string, historical_date: string) => {
  const response = await apiClient.get<WeatherResponse>('historical', {
    params: {
      query,
      historical_date,
    },
  });
  return response.data;
};

const WeatherService = {
  fetchCurrent,
  fetchHistoric,
};

export default WeatherService;
