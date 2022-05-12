import * as React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from './layout/MainLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CurrentWeather />} />
          <Route path="historicalWeather" element={<HistoricalWeather />} />
          <Route path="locationSearch" element={<LocationSearch />} />
          <Route path="locationSelection" element={<LocationSelection />} />
        </Route>
      </Routes>
    </div>
  );
}

function CurrentWeather() {
  return (
    <div>
      <h2>Current weather</h2>
    </div>
  );
}

function HistoricalWeather() {
  return (
    <div>
      <h2>Historical weather</h2>
    </div>
  );
}

function LocationSearch() {
  return (
    <div>
      <h2>Location search</h2>
    </div>
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
