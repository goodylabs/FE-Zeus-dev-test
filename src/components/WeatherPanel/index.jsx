import "./style.scss";
import CurrentWeatherBox from "../CurrentWeatherBox";
import FutureWeatherBox from "../FutureWeatherBox";
import LiveTime from "../LiveTime";
import ChartBox from "../ChartBox";

const WeatherPanel = () => {
    return (
        <div className="weather-panel">
            <div>
                <LiveTime></LiveTime>
                <div>
                    <CurrentWeatherBox />
                    <FutureWeatherBox />
                </div>
            </div>
            <ChartBox />
        </div>
    );
};

export default WeatherPanel;
