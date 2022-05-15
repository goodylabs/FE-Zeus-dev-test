import * as React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from './layout/MainLayout';
import CurrentWeather from './pages/CurrentWeather';
import HistoricalWeather from './pages/HistoricalWeather';
import LocationSearch from './pages/LocationSearch';
import LocationSelection from './pages/LocationSelection';

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

export default App;
