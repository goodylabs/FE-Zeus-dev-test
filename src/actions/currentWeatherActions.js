import axios from "axios";
// import { useContext } from "react";
// import { appContext } from "../AppContext";

const apiKey = process.env.REACT_APP_API_KEY;

export const getCurrentWeather = async (latitude, longitude, units) => {
    // const { dispatch } = useContext(appContext);
    try {
        const res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: { lat: latitude, lon: longitude, appid: apiKey, units: units },
        });
        const currentWeatherData = await res.data;
        console.log(currentWeatherData.main);
        // dispatch({ type: "SET_CURRENT_WEATHER_DATA", payload: currentWeatherData });
    } catch (err) {
        console.error(err);
    }
};
