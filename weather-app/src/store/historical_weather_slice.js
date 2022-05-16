import { createSlice } from "@reduxjs/toolkit";

const historicalWeatherSlice = createSlice({
  name: "historicalData",
  initialState: {
    historicalWeather: [],
    quntity: 0,
  },
  reducers: {
    addHistoricalData(state, action) {
      if (state.quntity === 5) {
        state.quntity = 0;
        state.historicalWeather = [
          {
            time: action.payload.time,
            temperature: action.payload.temperature,
            wind_speed: action.payload.wind_speed,
            wind_direction: action.payload.wind_direction,
            atmospheric_pressure: action.payload.atmospheric_pressure,
            humidity: action.payload.humidity,
          },
        ];
      } else {
        state.quntity++;
        state.historicalWeather.push({
          time: action.payload.time,
          temperature: action.payload.temperature,
          wind_speed: action.payload.wind_speed,
          wind_direction: action.payload.wind_direction,
          atmospheric_pressure: action.payload.atmospheric_pressure,
          humidity: action.payload.humidity,
        });
      }
    },
  },
});

export const historicalWeatherActions = historicalWeatherSlice.actions;
export default historicalWeatherSlice;
