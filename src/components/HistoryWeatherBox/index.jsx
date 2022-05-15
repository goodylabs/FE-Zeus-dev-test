import "./style.scss";
import PropTypes from "prop-types";

import Box from "../Box";
import WeatherIcon from "../icons/WeatherIcon";

const WeatherElement = ({ weather, temperature, day }) => {
    return (
        <div className="weather-element">
            <WeatherIcon weather={weather} time="day" size="4rem" />
            <h2 className="weather-element_temperature">{temperature + " \u00B0C"}</h2>
            <h3 className="weather-element_day">{day}</h3>
        </div>
    );
};

WeatherElement.propTypes = {
    weather: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
};

const HistoryWeatherBox = () => {
    return (
        <Box>
            <div className="history-weather-box">
                <WeatherElement
                    weather={"thunderstorm with light rain"}
                    temperature={"23"}
                    day={"Monday"}
                />
                <WeatherElement
                    weather={"thunderstorm with light rain"}
                    temperature={"23"}
                    day={"Tuesday"}
                />
                <WeatherElement
                    weather={"thunderstorm with light rain"}
                    temperature={"23"}
                    day={"Wednesday"}
                />
                <WeatherElement
                    weather={"thunderstorm with light rain"}
                    temperature={"23"}
                    day={"Friday"}
                />
                <WeatherElement
                    weather={"thunderstorm with light rain"}
                    temperature={"23"}
                    day={"Saturday"}
                />
                <WeatherElement
                    weather={"thunderstorm with light rain"}
                    temperature={"23"}
                    day={"Sunday"}
                />
                <WeatherElement
                    weather={"thunderstorm with light rain"}
                    temperature={"23"}
                    day={"Monday"}
                />
            </div>
        </Box>
    );
};

export default HistoryWeatherBox;
