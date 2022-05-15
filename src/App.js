import "./App.scss";
import WeatherPanel from "./components/WeatherPanel";
import Sidebar from "./components/Sidebar";
// import { getCoordinatesFromName } from "./actions/locationActions";
import { getCurrentWeather } from "./actions/currentWeatherActions";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        getCurrentWeather(51, -14, "metric");
    }, []);

    return (
        <div className="App">
            <div className="main-content-wrapper">
                {/* <button
                        onClick={async () => {
                            const a = getCurrentWeather(51, 14, "metric");
                            const b = await a;
                            console.log(b);
                        }}
                    >
                        aaa
                    </button> */}
                <div className="weather-panel-wrapper">
                    <WeatherPanel />
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default App;
