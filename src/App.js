import "./App.scss";
import WeatherPanel from "./components/WeatherPanel";
import Sidebar from "./components/Sidebar";
import { getCurrentWeather, getHistoryWeather } from "./actions/weatherActions";
import { useEffect, useContext } from "react";
import { appContext } from "./AppContext";

const App = () => {
    const { state, dispatch } = useContext(appContext);

    useEffect(() => {
        const getData = async () => {
            const weatherData = await getCurrentWeather(
                state.currentLocation.lat,
                state.currentLocation.lon,
                "metric"
            );
            dispatch({ type: "SET_WEATHER_DATA", payload: weatherData });
            const historyWeatherData = await getHistoryWeather(
                state.currentLocation.lat,
                state.currentLocation.lon,
                "metric"
            );
            dispatch({ type: "SET_HISTORY_WEATHER_DATA", payload: historyWeatherData });
        };
        getData();
    }, [state.currentLocation]);

    useEffect(() => {
        const chartData = [];
        state.historyWeatherData?.forEach((dayData) => {
            dayData.hourly?.forEach((hourData) => {
                const date = new Date(hourData.dt * 1000);
                chartData.push({
                    name: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${String(
                        date.getHours()
                    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
                    temperature: hourData.temp,
                    humidity: hourData.humidity,
                    pressure: hourData.pressure,
                });
            });
        });
        dispatch({ type: "SET_CHART_DATA", payload: chartData });
    }, [state.historyWeatherData]);

    useEffect(() => {
        if (state.searchHistory.length != 0) {
            localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory));
        }
    }, [state.searchHistory]);

    useEffect(() => {
        const history = localStorage.getItem("searchHistory");
        if (history) {
            dispatch({ type: "SET_SEARCH_HISTORY", payload: JSON.parse(history) });
        }
    }, []);

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
