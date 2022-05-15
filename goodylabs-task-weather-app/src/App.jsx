import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import CurrentWeatherView from "./components/CurrentWeatherView/CurrentWeatherView";
import HistoricalWeatherChart from "./components/HistoricalWeatherChart/HistoricalWeatherChart";
import ClockBox from "./components/Clock/Clock";
import requesturls from "./util/requesturls";
import LocationSearchCard from "./components/LocationSearchCard/LocationSearchCard";

const App = () => {
   let [res, setRes] = useState();
   // let [locData, setLocData] = useState();

   let day = 86400;

   let location = {
      lat: 51.7833,
      lon: 19.4667,
   };

   useEffect(() => {
      let date = new Date();
      let t = [
         Math.floor(date.getTime() / 1000 - day * 5),
         Math.floor(date.getTime() / 1000 - day * 4),
         Math.floor(date.getTime() / 1000 - day * 3),
         Math.floor(date.getTime() / 1000 - day * 2),
         Math.floor(date.getTime() / 1000 - day * 1),
      ];
      let endpoints = requesturls(location.lat, location.lon, t);

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
   }, []);

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
