import React from "react";
import "./style.scss";
import weatherEmojis from "../../util/weatherEmojis";

const WeatherChartCard = (props) => {
   let isDay = false;

   if (props.day >= props.sr && props.day <= props.ss) {
      isDay = true;
   }

   let date = new Date(props.day * 1000);

   console.log(props.weather);

   return (
      <div className="weather-chart-card-container">
         <p>{date.toLocaleDateString()}</p>
         <p className="weather-chart-temperature">{props.temperature}°C</p>
         <p>{weatherEmojis(props.weather, isDay)}</p>
      </div>
   );
};

export default WeatherChartCard;
