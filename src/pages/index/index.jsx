import React, { useState } from "react";
import { getWeatherForCity } from "../../actions/weatherActions";
import "./style.scss";

const Index = () => {
    const [city, setCity] = useState("Łódź");

    const handleSubmit = async () => {
        const response = await getWeatherForCity(city);
        console.log(response);
    };

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
        </section>
    );
};

export default Index;
