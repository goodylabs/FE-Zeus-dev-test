import { useEffect } from "react";
import { fetchCurrentWeatherData } from "./store/weather-actions";
import { useDispatch } from "react-redux";
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import fetchHistoricalWeatherData from "./store/historical_weather_actions";
import HistoricalDataDisplay from "./components/HistoricalDataDisplay/HistoricalDataDisplay";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeatherData("Lodz"));
    dispatch(fetchHistoricalWeatherData("Lodz"));
  }, [dispatch]);

  return (
    <>
      <SearchForm />
      <WeatherCard />
      <HistoricalDataDisplay />
    </>
  );
};

export default App;
