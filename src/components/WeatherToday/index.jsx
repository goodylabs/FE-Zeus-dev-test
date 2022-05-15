import React from "react";
import "./style.scss";
import CurrentTime from "../CurrentTime";
import Card from "../shared/Card";

const WeatherToday = ({ data, city }) => {
    return (
        <Card className="weather-today-wrapper" title={`Weather Today - ${city}`}>
            <div className="row">
                <div className="current-weather">
                    <img
                        src={`http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`}
                        alt={data.weather.description}
                    />
                    <p>{data.weather.description}</p>
                </div>
                <div className="basic-data">
                    <CurrentTime />
                    <div className="basic-details">
                        <div className="detail">
                            <span className="material-symbols-outlined">thermometer</span>
                            <p>{data.temp}°C</p>
                        </div>
                        <div className="detail">
                            <span className="material-symbols-outlined">air</span>
                            <p>{data.wind.speed} m/s (N)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advanced-details">
                <div className="detail">
                    <p className="label">Humidity</p>
                    <p>{data.humidity}%</p>
                </div>
                <div className="detail">
                    <p className="label">Pressure</p>
                    <p>{data.pressure} hPa</p>
                </div>
            </div>
        </Card>
    );
};

export default WeatherToday;
