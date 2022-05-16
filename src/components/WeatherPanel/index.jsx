import "./style.scss";
import CurrentWeatherBox from "../CurrentWeatherBox";
import FutureWeatherBox from "../FutureWeatherBox";
import LiveTime from "../LiveTime";
import ChartBox from "../ChartBox";

const WeatherPanel = () => {
    return (
        <div className="weather-panel">
            <div className="weather-panel_wrapper">
                <div>
                    <LiveTime></LiveTime>
                    <div>
                        <CurrentWeatherBox />
                        <FutureWeatherBox />
                    </div>
                </div>
                <ChartBox />
            </div>
        </div>
    );
};

export default WeatherPanel;
