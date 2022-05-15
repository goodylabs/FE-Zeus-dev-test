import React, { useReducer, createContext } from "react";

const dataContext = createContext();

const dataReducer = (state, action) => {
    switch (action.type) {
        case "SET_WEATHER": {
            return {
                ...state,
                loading: false,
                weather: action.payload.weather,
            };
        }
        case "SET_LOCATION": {
            return {
                ...state,
                loading: false,
                location: action.payload.location,
            };
        }
        case "SET_LOADING": {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case "SET_ERROR": {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }
    }
};

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, {
        location: {
            city: "Łodź",
            lat: null,
            lon: null,
        },
        weather: null,
        loading: false,
        error: null,
    });

    const value = { state, dispatch };
    return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export { dataContext, DataProvider };
