import { useSelector } from "react-redux";
import Card from "../UI/Card";
import HistoricalDataItem from "./HistoricalDataItem";
import HistoricalDataChartElem from "./HistoricalDataChartElem";
import classes from "./HistoricalDataDisplay.module.css";

const HistoricalDataDisplay = () => {
  const historicalWeather = useSelector((state) => state.weatherHistorical);
  const currentWeather = useSelector((state) => state.weatherCurrent);

  return (
    <Card className={classes.historicalDataDisplayCard}>
      <div>
        <h1>
          Historical data of: {currentWeather.location} {currentWeather.country}
        </h1>
      </div>
      <h2>Temperature Chart:</h2>
      <div className={classes.historicalDataDisplayDiv}>
        {historicalWeather.historicalWeather.map((weather) => {
          return (
            <div key={weather.time}>
              <HistoricalDataChartElem temperature={weather.temperature} />
              <HistoricalDataItem
                time={weather.time}
                temperature={weather.temperature}
                windSpeed={weather.wind_speed}
                windDirection={weather.wind_direction}
                atmosphericPressure={weather.atmosphericPressure}
                humidity={weather.humidity}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default HistoricalDataDisplay;
