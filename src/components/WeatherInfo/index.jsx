import React, { useContext } from "react";
import { dataContext } from "../../context/weatherContext";
import Spinner from "../shared/Spinner";
import WeatherHistory from "./WeatherHistory";
import WeatherToday from "./WeatherToday";
import "./style.scss";

const WeatherInfo = () => {
    const {
        state: { weather, loading, error },
    } = useContext(dataContext);

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
