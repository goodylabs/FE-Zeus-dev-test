import React from "react";
import "./styles/index.scss";
import WeatherPage from "./pages/weatherPage";
import { DataProvider } from "./context/weatherContext";
import axios from "axios";

function App() {
    axios.defaults.baseURL = "https://api.openweathermap.org";

    return (
        <DataProvider>
            <div className="App">
                <WeatherPage />
            </div>
        </DataProvider>
    );
}

export default App;
