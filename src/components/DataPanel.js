import React, { useState, useEffect } from 'react';
import { getData } from './getData';
import GetIcon from './GetIcon';
import Loading from './Loading';
import Error from './Error';

function DataPanel({ direction }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiResponse, setapiResponse] = useState(null);

  useEffect(() => {
    async function getWeather() {
      try {
        setLoading(true);
        const apiResponse = await getData(direction);
        setapiResponse(apiResponse);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    setError(null);
    getWeather();
  }, [direction]);

  if (error) return <Error error={error.message} />;

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="data">
        <div className="data-container">
          <div className="data-temp-icon">
            <div className="data-temparature data-parameter">
              <span>
                {Math.round(apiResponse.main.temp)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-temperature-celsius"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="6" cy="8" r="2" />
                  <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
                </svg>
              </span>
            </div>
            <div className="data-icon">
              <GetIcon apiResponse={apiResponse} />
            </div>
          </div>
          <div className="data-location data-parameter">
            <span>
              {apiResponse.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-pin"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </span>
            <span className="time">{new Date(apiResponse.dt * 1000).toLocaleTimeString()}</span>
          </div>
          <div className="data-four-parameters">
            <div className="data-wind-speed data-parameter data-one-of-four">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-wind"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                </svg>
              </span>
              <h1>Wind Speed</h1>
              <span>
                {apiResponse.wind.speed}
                <p>m/s</p>
              </span>
            </div>
            <div className="data-wind-deg data-parameter data-one-of-four">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-compass"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="8 16 10 10 16 8 14 14 8 16" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="3" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="21" y2="12" />
                </svg>
              </span>
              <h1>Wind degree</h1>
              <span>
                {apiResponse.wind.deg}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-degree"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="6" cy="8" r="2" />
                </svg>
              </span>
            </div>
            <div className="data-pressure data-parameter data-one-of-four">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-fold"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3v6l3 -3m-6 0l3 3" />
                  <path d="M12 21v-6l3 3m-6 0l3 -3" />
                </svg>
              </span>
              <h1>Pressure</h1>
              <span>
                {apiResponse.main.pressure}
                <p>hPa</p>
              </span>
            </div>
            <div className="data-humidity data-parameter data-one-of-four">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-droplet"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
                </svg>
              </span>

              <h1>Humidity</h1>
              <span>
                {apiResponse.main.humidity}
                <p>%</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataPanel;
