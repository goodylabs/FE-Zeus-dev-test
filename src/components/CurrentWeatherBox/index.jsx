/* eslint-disable no-unused-vars */
import "./style.scss";
import Box from "../Box";
import WeatherIcon from "../icons/WeatherIcon";
import WindIcon from "../icons/WindIcon";
import { useContext } from "react";
import { AppProvider } from "../../AppContext";

const CurrentWeatherBox = () => {
    const { dispatch } = useContext(AppProvider);
    const getTemperature = () => 22;
    return (
        <Box>
            <div className="current-weather-box">
                <div className="current-weather-box_base-info">
                    <div>
                        <div className="current-weather-box_base-info_temperature">
                            <h1 className="value">{`${getTemperature()} \u00B0C`}</h1>
                        </div>
                        <div className="current-weather-box_base-info_weather">
                            <WeatherIcon weather="Snow" time="day" size="8rem" />
                        </div>
                    </div>
                    <div className="current-weather-box_base-info_location">
                        <h2 className="location">Warszawa, PL</h2>
                    </div>
                </div>
                <div className="current-weather-box_details">
                    <div className="current-weather-box_details_wind">
                        <h3 className="current-weather-box_details_label">Wind</h3>
                        <div>
                            <h4 className="current-weather-box_details_wind_speed">420 km/h</h4>
                            <div className="current-weather-box_details_wind_direction">
                                <WindIcon windDirection={450} height={1} />
                            </div>
                        </div>
                    </div>
                    <div className="current-weather-box_details_pressure">
                        <h3 className="current-weather-box_details_label">Pressure</h3>
                        <h4 className="current-weather-box_details_pressure_value">1045 hPa</h4>
                    </div>
                    <div className="current-weather-box_details_humidity">
                        <h3 className="current-weather-box_details_label">Humidity</h3>
                        <h4 className="current-weather-box_details_humidity_value">56%</h4>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default CurrentWeatherBox;
