import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const appContext = createContext();

const appReducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_WEATHER_DATA": {
            return {
                ...state,
                currentWeatherData: action.payload.currentWeatherData,
            };
        }
        // case "SET_HISTORY_WEATHER_DATA": {
        //     return {
        //         ...state,
        //         historyWeatherData: action.payload.historyWeatherData,
        //     };
        // }
        case "SET_CURRENT_LOCATION": {
            return {
                ...state,
                currentLocation: action.payload.currentLocation,
            };
        }
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, {
        currentWeatherData: { coord: { lon: -14, lat: 51 } },
        currentLocation: {
            latitude: 51.7687323,
            longitude: 19.4569911,
        },
    });

    const value = { state, dispatch };
    return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

AppProvider.propTypes = {
    children: PropTypes.object.isRequired,
};

export { appContext, AppProvider };
