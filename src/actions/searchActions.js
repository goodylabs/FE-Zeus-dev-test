import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

export const findCities = async (name) => {
    const response = await axios.get("/geo/1.0/direct", {
        params: {
            q: name,
            limit: 6,
            appid: API_KEY,
        },
    });

    return response.data.map((city) => ({
        name: city.name,
        lat: city.lat,
        lon: city.lon,
        state: city.state,
    }));
};
