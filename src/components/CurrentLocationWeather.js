import '../styles/CurrentLocationWeatherStyles.css';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentLocationWeather(props) {
    const KELVIN_CONSTATNT = 272.15;
    const [currentTemp, setCurrentTemp] = useState(0);
    const [currentWindSpeed, setCurrentWindSpeed] = useState(0);
    const [currentPressure, setCurrentPressure] = useState(0);
    const [currentHumidity, setCurrentHumidity] = useState(0);
    const [currentWindDirection, setCurrentWindDirection] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState(0);
    const [cityName, setCityName] = useState('');
    const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date())
    let weatherImage;

    useEffect(() => {
        getWeatherDataByCoords(props.currentCityCoords.longitude, props.currentCityCoords.latitude);
    }, [])

    useEffect(() => {
        setInterval(() => {
            getWeatherDataByCoords(props.currentCityCoords.longitude, props.currentCityCoords.latitude);
            setFakeCurrentDate(new Date());
        }, 60000)
    }, [fakeCurrentDate]);

    function getWeatherDataByCoords(longitude, latitude) {
        axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${props.API_KEY}`,
            headers: { 'content-type': 'application/json' }
        }).then(response => {
            props.setCurrentTime(response.data.current.dt + response.data.timezone_offset);

            setCurrentTemp((response.data.current.temp - KELVIN_CONSTATNT).toFixed(0));
            setCurrentWindSpeed(response.data.current.wind_speed);
            setCurrentPressure(response.data.current.pressure);
            setCurrentHumidity(response.data.current.humidity);
            setCurrentWindDirection(response.data.current.wind_deg);
            setWeatherIcon(response.data.current.weather[0].icon);

            axios({
                method: 'GET',
                url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=3&appid=${props.API_KEY}`,
                headers: { 'content-type': 'application/json' }
            }).then(response => {
                setCityName(response.data[0].name);
            });
        });
    }
    
    weatherImage = <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} width="50" height="50" alt='weather_icon'/>

    return (
        <div className='clw-container'>
            <h2>{cityName}</h2>
            
            <div className='row-container'>
                <div className='data-container'>
                    {new Date(props.currentTime * 1000).toISOString().substring(11, 16)}
                </div>
                
                <div className='data-container'>
                    <p>{currentTemp}°C</p>
                    {weatherImage}
                </div>

                <div className='data-container'>
                    <p>{currentWindSpeed}m/s</p>
                    <Arrow style={{ transform: `rotate(${currentWindDirection}deg)`, marginLeft: '1rem' }}/>
                </div>
            </div>

            <div className='row-container'>
                <div className='data-container'>
                    <p>Pressure: {currentPressure}hPa</p>
                </div>
                
                <div className='data-container'>
                    <p>Humidity: {currentHumidity}%</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentLocationWeather;