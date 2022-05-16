import React, { useEffect, useContext } from "react";
import "./style.scss";
import degToDirection from "../../util/degToCompass";
import weatherEmojis from "../../util/weatherEmojis";
import { LocationContext } from "../../context/LocationContext";

const CurrentWeatherView = (props) => {
   let isDay = false;

   const { state } = useContext(LocationContext);

   if (
      props.response.current.dt >= props.response.current.sunrise &&
      props.response.current.dt <= props.response.current.sunset
   ) {
      isDay = true;
   }

   useEffect(() => {}, [state.location]);

   return (
      <div className="current-weather-view-container">
         <div className="current-weather-view-header">
            <p className="location-header">
               {props.location.data[0].name}, {props.location.data[0].country}{" "}
            </p>
            <p className="temperature-cloud-cover">
               {weatherEmojis(props.response.current.weather[0].id, isDay)}
               {"  "}
               {Math.round(props.response.current.temp)}°C{" "}
            </p>
            <p className="weather-description">
               {props.response.current.weather[0].description}
            </p>
         </div>
         <div className="precise-weather-data-container">
            <p className="precise-weather-data">
               Wind speed: {props.response.current.wind_speed} m/s
            </p>
            <p className="precise-weather-data">
               Wind direction: {degToDirection(props.response.current.wind_deg)}
            </p>
            <p className="precise-weather-data">
               Atmospheric pressure: {props.response.current.pressure} hPa
            </p>
            <p className="precise-weather-data">
               Humidity: {props.response.current.humidity}%
            </p>
         </div>
      </div>
   );
};

export default CurrentWeatherView;
