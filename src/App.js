import "./App.scss";
import WeatherPanel from "./components/WeatherPanel";
import Sidebar from "./components/Sidebar";
import { getCurrentWeather } from "./actions/currentWeatherActions";
import { useEffect, useContext } from "react";
import { appContext } from "./AppContext";

const App = () => {
    const { state, dispatch } = useContext(appContext);

    useEffect(() => {
        const getData = async () => {
            const currentWeatherData = await getCurrentWeather(
                state.currentLocation.lat,
                state.currentLocation.lon,
                "metric"
            );
            dispatch({ type: "SET_CURRENT_WEATHER_DATA", payload: currentWeatherData });
        };
        getData();
    }, [state.currentLocation]);

    return (
        <div className="App">
            <div className="main-content-wrapper">
                <div className="weather-panel-wrapper">
                    <WeatherPanel />
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default App;
