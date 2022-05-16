import { FunctionComponent, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UseQueryResult } from 'react-query';
import DateService from '../services/DateService';
import WeatherHistoricResponse from '../types/WeatherHistoricResponse';

interface IPropsHistoricChart {
  weatherData: UseQueryResult<WeatherHistoricResponse, Error>[];
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoricChart: FunctionComponent<IPropsHistoricChart> = ({ weatherData }) => {
  const [dataToDisplay, setDataToDisplay] = useState<{ label: string; data: (number | undefined)[] }>({
    label: 'pick a statistic',
    data: [],
  });
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Historical data from 5 days ago',
      },
    },
  };
  const renderChart = () => {
    const labels: Array<string> = [];
    const datasets: Array<{
      label: string;
      data: (number | undefined)[];
      borderColor: string;
      backgroundColor: string;
    }> = [];
    weatherData.forEach((result) => {
      if (result.data) {
        labels.push(DateService.getTimeFromEpoch(result.data?.current.dt).split(',')[0]);
      }
    });
    datasets.push({
      label: dataToDisplay?.label,
      data: dataToDisplay?.data,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    });
    return <Line options={chartOptions} data={{ labels, datasets }} />;
  };
  return (
    <>
      <div className="mt-3 mb-2 d-flex justify-content-around input-group">
        <input
          type="radio"
          className="btn-check"
          id="temperature-btn"
          name="options"
          defaultChecked={dataToDisplay.label === 'Temperature'}
          onClick={() =>
            setDataToDisplay({ label: 'Temperature', data: weatherData.map((day) => day.data?.current.temp) })
          }
        />
        <label className="btn btn-outline-primary" htmlFor="temperature-btn">
          Temperature
        </label>
        <input
          type="radio"
          className="btn-check"
          id="pressure-btn"
          name="options"
          defaultChecked={dataToDisplay.label === 'Atmospheric pressure'}
          onClick={() =>
            setDataToDisplay({
              label: 'Atmospheric pressure',
              data: weatherData.map((day) => day.data?.current.pressure),
            })
          }
        />
        <label className="btn btn-outline-primary" htmlFor="pressure-btn">
          Atmospheric pressure
        </label>
        <input
          type="radio"
          className="btn-check"
          id="wind-btn"
          name="options"
          defaultChecked={dataToDisplay.label === 'Wind Speed'}
          onClick={() =>
            setDataToDisplay({ label: 'Wind Speed', data: weatherData.map((day) => day.data?.current.wind_speed) })
          }
        />
        <label className="btn btn-outline-primary" htmlFor="wind-btn">
          Wind speed
        </label>
        <input
          type="radio"
          className="btn-check"
          id="humidity-btn"
          name="options"
          defaultChecked={dataToDisplay.label === 'Humidity'}
          onClick={() =>
            setDataToDisplay({ label: 'Humidity', data: weatherData.map((day) => day.data?.current.humidity) })
          }
        />
        <label className="btn btn-outline-primary" htmlFor="humidity-btn">
          Humidity
        </label>
      </div>
      <div>{renderChart()}</div>
    </>
  );
};

export default HistoricChart;
