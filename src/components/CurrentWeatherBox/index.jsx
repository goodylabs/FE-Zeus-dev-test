import "./style.scss";
import Box from "../Box";
import WeatherIcon from "../icons/WeatherIcon";
import WindIcon from "../icons/WindIcon";
import { useContext } from "react";
import { appContext } from "../../AppContext";

const CurrentWeatherBox = () => {
    const { state } = useContext(appContext);

    return (
        <Box>
            <div className="current-weather-box">
                <div className="current-weather-box_base-info">
                    <div>
                        <div className="current-weather-box_base-info_temperature">
                            <h1 className="value">{`${Math.round(
                                state.currentWeatherData?.main.temp
                            )} \u00B0C`}</h1>
                        </div>
                        <div className="current-weather-box_base-info_weather">
                            <WeatherIcon
                                weather={state.currentWeatherData?.weather[0].description}
                                time="day"
                                size="8rem"
                            />
                        </div>
                    </div>
                    <div className="current-weather-box_base-info_location">
                        <h2 className="location">
                            {state.currentLocation.name}
                            {state.currentLocation.state ? ", " + state.currentLocation.state : ""}
                            {", " + state.currentLocation.country}
                        </h2>
                    </div>
                </div>
                <div className="current-weather-box_details">
                    <div className="current-weather-box_details_wind">
                        <h3 className="current-weather-box_details_label">Wind</h3>
                        <div>
                            <h4 className="current-weather-box_details_wind_speed">{`${state.currentWeatherData?.wind.speed} m/s`}</h4>
                            <div className="current-weather-box_details_wind_direction">
                                <WindIcon
                                    windDirection={state.currentWeatherData?.wind.deg}
                                    height={1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="current-weather-box_details_pressure">
                        <h3 className="current-weather-box_details_label">Pressure</h3>
                        <h4 className="current-weather-box_details_pressure_value">{`${state.currentWeatherData?.main.pressure} hPa`}</h4>
                    </div>
                    <div className="current-weather-box_details_humidity">
                        <h3 className="current-weather-box_details_label">Humidity</h3>
                        <h4 className="current-weather-box_details_humidity_value">{`${state.currentWeatherData?.main.humidity}%`}</h4>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default CurrentWeatherBox;
