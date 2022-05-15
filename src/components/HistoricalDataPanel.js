import React, { useState, useEffect } from 'react';
import { getHistoricData } from './getData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Loading from './Loading';
import GetIcon from './GetIcon';
import Error from './Error';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GetChart({ apiResponse }) {
  function exportTemp(a) {
    return a.data.current.temp;
  }
  const temp = apiResponse.map(exportTemp);

  function exportDate(a) {
    return new Date(a.data.current.dt * 1000).toLocaleDateString();
  }
  const labels = apiResponse.map(exportDate);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Last 5 days chart'
      }
    }
  };

  let data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: temp,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };

  return <Line options={options} data={data} />;
}

function HistoricData({ data }) {
  return (
    <div className="historical-data-day">
      <div className="historical-data-time">
        <span>{new Date(data.current.dt * 1000).toLocaleDateString()}</span>
      </div>
      <div className="historical-data-temparature historical-data-parameter">
        <span>
          {Math.round(data.current.temp)}

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
          <GetIcon apiResponse={data.current} />
        </span>
      </div>
      <div className="historical-data-four-parameters">
        <div className="historical-data-wind-speed historical-data-parameter historical-data-one-of-four">
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

            {data.current.wind_speed}
            <p>m/s</p>
          </span>
        </div>
        <div className="historical-data-wind-deg historical-data-parameter historical-data-one-of-four">
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

            {data.current.wind_deg}
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
        <div className="historical-data-pressure historical-data-parameter historical-data-one-of-four">
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

            {data.current.pressure}
            <p>hPa</p>
          </span>
        </div>
        <div className="historical-data-humidity historical-data-parameter historical-data-one-of-four">
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

            {data.current.humidity}
            <p>%</p>
          </span>
        </div>
      </div>
    </div>
  );
}

function HistoricalDataPanel({ direction }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiResponse, setapiResponse] = useState(null);

  useEffect(() => {
    async function getWeather() {
      try {
        setLoading(true);
        setapiResponse(await getHistoricData(direction));
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
    <div className="historical-data">
      <div className="historical-data-container">
        <HistoricData data={apiResponse[0].data} />
        <HistoricData data={apiResponse[1].data} />
        <HistoricData data={apiResponse[2].data} />
        <HistoricData data={apiResponse[3].data} />
        <HistoricData data={apiResponse[4].data} />
      </div>
      <GetChart apiResponse={apiResponse} />
    </div>
  );
}

export default HistoricalDataPanel;
