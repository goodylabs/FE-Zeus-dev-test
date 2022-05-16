import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weather-slice";
import historicalWeatherSlice from "./historical_weather_slice";

const store = configureStore({
  reducer: {
    weatherCurrent: weatherSlice.reducer,
    weatherHistorical: historicalWeatherSlice.reducer,
  },
});

export default store;
