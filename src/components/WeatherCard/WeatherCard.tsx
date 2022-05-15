import { FunctionComponent, useMemo } from 'react';
import { TemperatureCelsius, MapPin, ArrowBigRight } from 'tabler-icons-react';
import DateService from '../../services/DateService';
import WeatherResponse from '../../types/WeatherResponse';
import determineIcon from '../../utils/determineIcon';
import './WeatherCard.css';

interface IPropsWeatherCard {
  weatherReport: WeatherResponse;
}

const WeatherCard: FunctionComponent<IPropsWeatherCard> = ({ weatherReport }) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;
  const dateObject = useMemo(() => DateService.getTimeFromEpoch(weatherReport.dt), [weatherReport.dt]);
  return (
    <div className="container mt-4 gradient text-white">
      <div className="row">
        <div className="col ms-3">
          <div className="mt-3 d-flex align-items-center">
            <MapPin size="3em" />
            <div className="ms-2 fs-1 font-weight-bold">{weatherReport.name}</div>
          </div>
          <div className="d-flex align-items-center">
            <h1 className="display-1 me-2">{Math.round(weatherReport.main.temp)}</h1>
            <TemperatureCelsius className="mb-5" size="2.2em" />
            <div className="ms-auto me-5">
              {determineIcon(
                weatherReport.weather.description,
                weatherReport.sys.sunrise,
                weatherReport.sys.sunset,
                weatherReport.dt,
              )}
            </div>
          </div>
          <div className="fs-4">{new Date(dateObject.split(',')[0]).toLocaleDateString('en-US', dateOptions)}</div>
          <div className="fs-2 mt-2">{dateObject.split(',')[1]}</div>
          <div className="d-flex mt-3 mb-4">
            <div className="d-flex">
              <ArrowBigRight style={{ transform: `rotate(${weatherReport.wind.deg}deg)` }} size="1.5em" />
              <div className="ms-2 me-3">Wind {weatherReport.wind.speed} km/h</div>
            </div>
            <div>|</div>
            <div className="me-3 ms-3">Hum {weatherReport.main.humidity}%</div>
            <div>|</div>
            <div className="ms-3">Atmospheric pressure {weatherReport.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
