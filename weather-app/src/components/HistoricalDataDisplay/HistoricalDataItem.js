import moment from "moment";
import classes from "./HistoricalDataItem.module.css"
const HistoricalDataItem = (props) => {
  const time = moment.unix(props.time).format("YYYY-MM-DD HH:mm:ss");

  return (
    <div className={classes.historicalDataItem}>
      <h5>{time}</h5>
      <h5>Temperature: {props.temperature} &deg;C</h5>
      <h5>Wind speed: {props.windSpeed} m/s</h5>
      <h5>Wind direction: {props.windDirection}</h5>
      <h5>Humidity: {props.humidity}%</h5>
      <h5>Atmospheric presure: {props.atmospheric_pressure} hPa</h5>
    </div>
  );
};

export default HistoricalDataItem;
