import { weatherActions } from "./weather-slice";
import moment from "moment";
import axios from "axios";

export const windDirectionCalculation = (windDegree) => {
  if (
    (0 <= windDegree && windDegree <= 11.25) ||
    (348.75 < windDegree && windDegree <= 360)
  ) {
    return "N";
  } else if (11.25 < windDegree && windDegree <= 33.75) {
    return "NNE";
  } else if (33.75 < windDegree && windDegree <= 56.25) {
    return "NE";
  } else if (56.25 < windDegree && windDegree <= 78.75) {
    return "ENE";
  } else if (78.75 < windDegree && windDegree <= 101.25) {
    return "E";
  } else if (101.25 < windDegree && windDegree <= 123.75) {
    return "ESE";
  } else if (123.75 < windDegree && windDegree <= 146.25) {
    return "SE";
  } else if (146.25 < windDegree && windDegree <= 168.75) {
    return "SSE";
  } else if (168.75 < windDegree && windDegree <= 191.25) {
    return "S";
  } else if (191.25 < windDegree && windDegree <= 213.75) {
    return "SSW";
  } else if (213.75 < windDegree && windDegree <= 236.25) {
    return "SW";
  } else if (236.25 < windDegree && windDegree <= 258.75) {
    return "WSW";
  } else if (258.75 < windDegree && windDegree <= 281.25) {
    return "W";
  } else if (281.25 < windDegree && windDegree <= 303.75) {
    return "WNW";
  } else if (303.75 < windDegree && windDegree <= 326.25) {
    return "NW";
  } else if (326.25 < windDegree && windDegree <= 348.75) {
    return "NNW";
  }
};

export const fetchCurrentWeatherData = (searchedLocation) => {
  return (dispatch) => {
    const dateTo = moment().utcOffset().valueOf();
    const dateFrom = moment().subtract(5, "d").utcOffset().valueOf();

    console.log(dateTo);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchedLocation}&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then((response) => {
        const windDirection = windDirectionCalculation(response.data.wind.deg);

        const celsiusTemperature = Math.trunc(response.data.main.temp - 273.15);

        dispatch(
          weatherActions.newLocation({
            location: response.data.name,
            country: response.data.sys.country,
            localtime: response.data.timezone,
            temperature: celsiusTemperature,
            wind_speed: response.data.wind.speed,
            wind_direction: windDirection,
            atmospheric_pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            weather_descriptions: response.data.weather[0].description,
            weather_id: response.data.weather[0].id,
            icon_id: response.data.weather[0].icon,
            lat: response.data.lat,
            lon: response.data.lon,
          })
        );
      })
      .catch((error) => {
        console.log(`Error occured: ${error}`);
      });
  };
};
