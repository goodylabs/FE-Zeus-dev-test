import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import WeatherIcon from "../UI/WeatherIcon";
import moment from "moment";

import classes from "./WeatherCard.module.css";

const WeatherCard = () => {
  const weather = useSelector((state) => state.weatherCurrent);

  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeShiftInMinutes = weather.localtime / 60;
      setTime(
        moment().utcOffset(timeShiftInMinutes).format("YYYY-MM-DD HH:mm:ss")
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [weather]);

  return (
    <Card className={classes.weatherCard}>
      <div>
        <h1>
          {weather.location} {weather.country}
        </h1>
        <h2>{time}</h2>
        <h3>Temperature: {weather.temperature} &deg;C</h3>
        <h3>
          Wind speed: {weather.wind_speed} m/s | Wind direction:{" "}
          {weather.wind_direction}
        </h3>
        <h3>Humidity: {weather.humidity}%</h3>
        <h3>Atmospheric presure: {weather.atmospheric_pressure} hPa</h3>
      </div>
      <div>
        <WeatherIcon />
      </div>
    </Card>
  );
};

export default WeatherCard;
