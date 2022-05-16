import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import axios from "axios";
import CurrentWeatherView from "./components/CurrentWeatherView/CurrentWeatherView";
import HistoricalWeatherChart from "./components/HistoricalWeatherChart/HistoricalWeatherChart";
import ClockBox from "./components/Clock/Clock";
import requesturls from "./util/requesturls";
import LocationSearchCard from "./components/LocationSearchCard/LocationSearchCard";
import { LocationContext } from "./context/LocationContext";

const App = () => {
   let [res, setRes] = useState();

   let day = 86400;

   const { state } = useContext(LocationContext);

   useEffect(() => {
      let date = new Date();
      let t = [
         Math.floor(date.getTime() / 1000 - day * 5),
         Math.floor(date.getTime() / 1000 - day * 4),
         Math.floor(date.getTime() / 1000 - day * 3),
         Math.floor(date.getTime() / 1000 - day * 2),
         Math.floor(date.getTime() / 1000 - day * 1),
      ];

      let endpoints = requesturls(state.location.lat, state.location.lon, t);

      let p = [
         axios.get(endpoints[0]),
         axios.get(endpoints[1]),
         axios.get(endpoints[2]),
         axios.get(endpoints[3]),
         axios.get(endpoints[4]),
         axios.get(endpoints[5]),
         axios.get(endpoints[6]),
      ];

      Promise.all(p).then((dataAll) => setRes(dataAll));
   }, [state.location]);

   return (
      <div className="App">
         <div className="app-container">
            <div className="top-flex-container">
               <ClockBox />
               <LocationSearchCard />
            </div>
            {res ? (
               <div>
                  <CurrentWeatherView response={res[0].data} location={res[6]} />
                  <HistoricalWeatherChart response={res} />
               </div>
            ) : (
               <p>Weather data is unavailable</p>
            )}
         </div>
      </div>
   );
};

export default App;
