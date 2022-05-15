import * as React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from './layout/MainLayout';
import CurrentWeather from './pages/CurrentWeather';
import HistoricalWeather from './pages/HistoricalWeather';
import LocationSearch from './pages/LocationSearch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CurrentWeather />} />
          <Route path="historicalWeather" element={<HistoricalWeather />} />
          <Route path="locationSearch" element={<LocationSearch />} />
          <Route path="locationSelection" element={<LocationSelection />} />
        </Route>
      </Routes>
    </>
  );
}

function LocationSelection() {
  return (
    <div>
      <h2>Location selection</h2>
    </div>
  );
}

export default App;
