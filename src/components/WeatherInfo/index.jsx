import React, { useContext, useEffect } from "react";
import { dataContext } from "../../context/weatherContext";
import Spinner from "../shared/Spinner";
import WeatherHistory from "./WeatherHistory";
import WeatherToday from "./WeatherToday";
import "./style.scss";
import { getWeatherForCity } from "../../actions/weatherActions";

const WeatherInfo = () => {
    const {
        state: { location, weather, loading, error },
        dispatch,
    } = useContext(dataContext);

    useEffect(() => {
        if ((location.lat, location.lon)) {
            getWeatherForCity(location.lat, location.lon, dispatch);
        }
    }, [location]);

    return (
        <div className="weather-info-wrapper">
            {loading ? (
                <Spinner />
            ) : error ? (
                <p>{error}</p>
            ) : (
                weather && (
                    <>
                        <WeatherToday />
                        <WeatherHistory />
                    </>
                )
            )}
        </div>
    );
};

export default WeatherInfo;
