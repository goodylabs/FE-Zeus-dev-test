import "./style.scss";
import PropTypes from "prop-types";

import Box from "../Box";
import WeatherIcon from "../icons/WeatherIcon";
import { useEffect, useContext, useState } from "react";
import { appContext } from "../../AppContext";

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

const FutureWeatherBox = () => {
    const [weatherElements, setWeatherElements] = useState();
    const { state } = useContext(appContext);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        setWeatherElements(
            <>
                {state.weatherData?.daily.map((day) => {
                    const date = new Date(day.dt * 1000);
                    return (
                        <WeatherElement
                            key={day.td}
                            weather={day.weather[0].description}
                            temperature={Math.round(day.temp.day)}
                            day={dayNames[date.getDay()]}
                        />
                    );
                })}
            </>
        );
    }, [state.weatherData]);
    return (
        <Box>
            <div className="history-weather-box">
                <h3 className="history-weather-box_title">Forecast</h3>
                <div className="history-weather-box_list">{weatherElements}</div>
            </div>
        </Box>
    );
};

export default FutureWeatherBox;
