import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const appReducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_WEATHER_DATA": {
            return {
                ...state,
                currentWeatherData: action.payload,
            };
        }
        case "SET_HISTORY_WEATHER_DATA": {
            return {
                ...state,
                historyWeatherData: action.payload.historyWeatherData,
            };
        }
        case "SET_CURRENT_LOCATION": {
            return {
                ...state,
                currentLocation: action.payload.currentLocation,
            };
        }
    }
};
const appContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        currentWeatherData: undefined,
        historyWeatherData: [{}, {}, {}, {}, {}],
        currentLocation: {
            country: "PL",
            lat: 51.7687323,
            lon: 19.4569911,
            name: "Łódź",
            state: "Łódź Voivodeship",
        },
    };
    const [state, dispatch] = useReducer(appReducer, initialState);

    const value = { state, dispatch };
    return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

AppProvider.propTypes = {
    children: PropTypes.object.isRequired,
};

export { appContext, AppProvider };
