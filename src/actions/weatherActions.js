import axios from "axios";
import moment from "moment";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const getWeatherData = (data) => ({
    time: data.dt,
    temp: data.feels_like,
    weather: data.weather,
    wind: {
        speed: data.wind_speed,
        direction: data.wind_deg,
    },
    pressure: data.pressure,
    humidity: data.humidity,
});

export const getGeolocationForCity = async (city) => {
    const response = await axios.get("http://api.openweathermap.org/geo/1.0/direct", {
        params: {
            q: city,
            limit: 1,
            appid: API_KEY,
        },
    });
    const { lat, lon } = response.data[0];
    return [lat, lon];
};

export const getWeatherForCity = async (city) => {
    const [lat, lon] = await getGeolocationForCity(city);

    const historyRequests = [];
    for (let i = 1; i <= 5; i++) {
        historyRequests.push(
            axios.get("https://api.openweathermap.org/data/2.5/onecall/timemachine", {
                params: {
                    lat,
                    lon,
                    dt: moment().subtract(i, "days").unix(),
                    appid: API_KEY,
                },
            })
        );
    }

    const response = await Promise.all(historyRequests);
    const history = response.map((day) =>
        day.data.hourly.map((hour) => getWeatherData(hour))
    );

    const now = getWeatherData(response[response.length - 1].data.current);
    return [now, history];
};
