import "./style.scss";
import CurrentWeatherBox from "../CurrentWeatherBox";
import HistoryWeatherBox from "../HistoryWeatherBox";
import LiveTime from "../LiveTime";

const WeatherPanel = () => {
    return (
        <div className="weather-panel">
            <LiveTime></LiveTime>
            <div>
                <CurrentWeatherBox />
                <HistoryWeatherBox />
            </div>
        </div>
    );
};

export default WeatherPanel;
