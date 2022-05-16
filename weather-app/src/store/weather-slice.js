import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    location: "",
    country: "",
    localtime: "",
    temperature: 0,
    wind_speed: 0,
    wind_direction: "",
    atmospheric_pressure: 0,
    humidity: 0,
    weather_descriptions: "",
    weather_id: 0,
    icon_id: "11d",
    lon: 0,
    lat: 0,
  },
  reducers: {
    newLocation(state, action) {
      state.location = action.payload.location;
      state.country = action.payload.country;
      state.localtime = action.payload.localtime;
      state.temperature = action.payload.temperature;
      state.wind_speed = action.payload.wind_speed;
      state.wind_direction = action.payload.wind_direction;
      state.atmospheric_pressure = action.payload.atmospheric_pressure;
      state.humidity = action.payload.humidity;
      state.weather_id = action.payload.weather_id;
      state.icon_id = action.payload.icon_id;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice;
