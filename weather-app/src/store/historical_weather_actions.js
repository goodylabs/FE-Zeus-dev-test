import { historicalWeatherActions } from "./historical_weather_slice";
import moment from "moment";
import axios from "axios";
import { windDirectionCalculation } from "./weather-actions";

export const fetchHistoricalWeatherData = (searchedLocation) => {
  return (dispatch) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then((responseGeo) => {
        const lat = responseGeo.data[0].lat;
        const lon = responseGeo.data[0].lon;

        for (let i = 1; i <= 5; i++) {
          const date = moment().utc().subtract(i, "d").unix().valueOf();

          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${process.env.REACT_APP_WEATHER_KEY}`
            )
            .then((response) => {
              const windDirection = windDirectionCalculation(
                response.data.hourly[10].wind_deg
              );

              const celsiusTemperature = Math.trunc(
                response.data.hourly[10].temp - 273.15
              );

              dispatch(
                historicalWeatherActions.addHistoricalData({
                  time: response.data.hourly[10].dt,
                  temperature: celsiusTemperature,
                  wind_speed: response.data.hourly[10].wind_speed,
                  wind_direction: windDirection,
                  atmospheric_pressure: response.data.hourly[10].pressure,
                  humidity: response.data.hourly[10].humidity,
                })
              );
            })
            .catch((error) => {
              console.log(
                `Error with fetching historical weather data: ${error}`
              );
            });
        }
      })
      .catch((error) => {
        console.log(`Error with fetching geolocation data: ${error}`);
      });
  };
};

export default fetchHistoricalWeatherData;
