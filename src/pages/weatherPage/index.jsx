import React, { useContext, useEffect, useState } from "react";
import { getGeolocationForCity, getWeatherForCity } from "../../actions/weatherActions";
import WeatherInfo from "../../components/WeatherInfo";
import { dataContext } from "../../context/weatherContext";
import "./style.scss";

const WeatherPage = () => {
    const [city, setCity] = useState("Łódź");
    const {
        state: { location },
        dispatch,
    } = useContext(dataContext);

    const handleSubmit = async () => {
        getGeolocationForCity(city, dispatch);
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    useEffect(() => {
        if (location.lat && location.lon) {
            getWeatherForCity(location.lat, location.lon, dispatch);
        }
    }, [location.city]);

    return (
        <section className="main-page">
            <h1>☀️ Weather App ☀️</h1>
            <p>Insert your city to get last 5 days history of the weather.</p>
            <div>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleSubmit}>Check weather!</button>
            </div>
            <WeatherInfo />
        </section>
    );
};

export default WeatherPage;
