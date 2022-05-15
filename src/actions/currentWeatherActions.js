import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getCurrentWeather = async (latitude, longitude, units) => {
    try {
        const res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: { lat: latitude, lon: longitude, appid: apiKey, units: units },
        });
        const currentWeatherData = await res.data;
        return currentWeatherData;
    } catch (err) {
        console.error(err);
    }
};
