import axios from "axios";
import moment from "moment";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const getWeatherData = (data) => ({
    time: data.dt,
    temp: data.feels_like,
    weather: data.weather[0],
    windSpeed: data.wind_speed,
    windDirection: data.wind_deg,
    pressure: data.pressure,
    humidity: data.humidity,
});

export const getGeolocationForCity = async (city, dispatch) => {
    dispatch({ type: "SET_LOADING" });

    try {
        const response = await axios.get("/geo/1.0/direct", {
            params: {
                q: city,
                limit: 1,
                appid: API_KEY,
            },
        });

        if (response.data.length != 0) {
            const { lat, lon } = response.data[0];
            dispatch({ type: "SET_LOCATION", payload: { location: { city, lat, lon } } });
            return;
        }

        dispatch({
            type: "SET_ERROR",
            payload: { error: "Couldn't find requested city." },
        });
    } catch (err) {
        dispatch({
            type: "SET_ERROR",
            payload: { error: "Couldn't get requested data." },
        });
    }
};

export const getWeatherForCity = async (lat, lon, dispatch) => {
    dispatch({ type: "SET_LOADING" });

    const historyRequests = [];
    for (let i = 1; i <= 5; i++) {
        historyRequests.push(
            axios.get("https://api.openweathermap.org/data/2.5/onecall/timemachine", {
                params: {
                    lat,
                    lon,
                    units: "metric",
                    dt: moment().subtract(i, "days").unix(),
                    appid: API_KEY,
                },
            })
        );
    }

    try {
        const response = await Promise.all(historyRequests);
        const history = response
            .map((day) => day.data.hourly.map((hour) => getWeatherData(hour)))
            .flat()
            .filter((_, index) => !(index % 2));

        const now = getWeatherData(response[response.length - 1].data.current);

        dispatch({ type: "SET_WEATHER", payload: { weather: { now, history } } });
    } catch (err) {
        dispatch({
            type: "SET_ERROR",
            payload: { error: "Couldn't get requested data." },
        });
    }
};
