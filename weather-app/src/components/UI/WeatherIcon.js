import { useSelector } from "react-redux";

const WeatherIcon = ({ width = "200px", height = "200px" }) => {
  const weather = useSelector((state) => state.weatherCurrent);

  return (
    <img
      src={`https://openweathermap.org/img/wn/${weather.icon_id}@2x.png`}
      alt={weather.weather_description}
      style={{
        width,
        height,
      }}
    />
  );
};

export default WeatherIcon;
