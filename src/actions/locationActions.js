import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getCoordinatesFromName = async (name) => {
    try {
        console.log(name);
        const res = await axios.get("http://api.openweathermap.org/geo/1.0/direct", {
            params: { limit: 5, appid: apiKey, q: name },
        });
        const data = await res.data;
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const getNameFromCoordinates = async (latitude, longitude, limit) => {
    try {
        const res = await axios.get("http://api.openweathermap.org/geo/1.0/reverse", {
            params: { lat: latitude, lon: longitude, limit: limit, appid: apiKey },
        });
        return res.data;
    } catch (err) {
        console.error(err);
    }
};
