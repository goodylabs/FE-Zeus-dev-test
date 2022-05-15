import React from "react";
import "./styles/index.scss";
import WeatherPage from "./pages/weatherPage";
import { DataProvider } from "./context/weatherContext";

function App() {
    return (
        <DataProvider>
            <div className="App">
                <WeatherPage />
            </div>
        </DataProvider>
    );
}

export default App;
