import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CurrentWeather />} />
          <Route path="historicalWeather" element={<HistoricalWeather />} />
          <Route path="locationSearch" element={<LocationSearch />} />
          <Route path="locationSelection" element={<LocationSelection />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Current weather</Link>
          </li>
          <li>
            <Link to="/historicalWeather">Historical weather</Link>
          </li>
          <li>
            <Link to="/locationSearch">Location search</Link>
          </li>
          <li>
            <Link to="/locationSelection">Location selection</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
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
