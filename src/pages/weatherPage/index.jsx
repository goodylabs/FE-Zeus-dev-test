import React, { useEffect, useState } from "react";
import { getWeatherForCity } from "../../actions/weatherActions";
import WeatherHistory from "../../components/WeatherHistory";
import WeatherToday from "../../components/WeatherToday";
import "./style.scss";

const WeatherPage = () => {
    const [city, setCity] = useState("Łódź");
    const [weatherNow, setWeatherNow] = useState(null);
    const [weatherHistory, setWeatherHistory] = useState(null);

    const handleSubmit = async () => {
        const [now, history] = await getWeatherForCity(city);
        setWeatherNow(now);
        setWeatherHistory(history.flat().filter((_, index) => !(index % 2)));
    };

    useEffect(() => {
        handleSubmit();
    }, []);

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

            {weatherNow && <WeatherToday data={weatherNow} city={city} />}
            {weatherHistory && <WeatherHistory data={weatherHistory} />}
        </section>
    );
};

export default WeatherPage;
