import React, { useContext, useEffect } from "react";
import { getWeatherForCity } from "../../actions/weatherActions";
import SearchBox from "../../components/SearchBox";
import WeatherInfo from "../../components/WeatherInfo";
import { dataContext } from "../../context/weatherContext";
import "./style.scss";

const WeatherPage = () => {
    const {
        state: { location },
        dispatch,
    } = useContext(dataContext);

    useEffect(() => {
        if (location.lat && location.lon) {
            getWeatherForCity(location.lat, location.lon, dispatch);
        }
    }, [location.city]);

    return (
        <section className="main-page">
            <h1>☀️ Weather App ☀️</h1>
            <p>Insert your city to get last 5 days history of the weather.</p>
            <SearchBox />
            <WeatherInfo />
        </section>
    );
};

export default WeatherPage;
