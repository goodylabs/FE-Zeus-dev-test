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

export const getHistoryWeather = async (latitude, longitude, units) => {
    let result = [5];
    for (let i = 0; i < 5; i++) {
        try {
            const date = new Date();
            date.setDate(date.getDate() - (i + 1));
            console.log(Math.round(date.getTime() / 1000));
            const res = await axios.get(
                "https://api.openweathermap.org/data/2.5/onecall/timemachine",
                {
                    params: {
                        lat: latitude,
                        lon: longitude,
                        appid: apiKey,
                        units: units,
                        dt: Math.round(date.getTime() / 1000),
                    },
                }
            );
            const weatherData = await res.data;
            result[i] = weatherData;
        } catch (err) {
            console.error(err);
        }
    }
    return result;
};
