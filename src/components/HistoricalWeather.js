import '../styles/HistoricalWeatherStyles.css';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function HistoricalWeather(props) {
  const KELVIN_CONSTATNT = 272.15;
  const SECONDS_IN_DAY = 86400;
  let data = [];
  const [chart, setChart] = useState("Loading chart data...");
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let componentToShow;

  useEffect(() => {
    if(props.currentCityCoords !== undefined && props.currentTime > 0) {
      getFiveDaysHistoricalData(props.currentCityCoords.longitude, props.currentCityCoords.latitude, props.currentTime);
      setTimeout(() => {
        createChart();
      }, 1000);
    }
  }, [props.currentCityCoords, props.currentTime]);

  function getHistoricalWeatherData(longitude, latitude, time, dayIndex) {
      console.log(props.currentCityCoords.longitude);
      console.log(props.currentCityCoords.latitude);
      console.log(props.currentTime);

      axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${time}&appid=${props.API_KEY}`,
        headers: { 'content-type': 'application/json' }
      }).then(response => {
        data.push({
          name: day[dayIndex],
          temp: (response.data.current.temp - KELVIN_CONSTATNT).toFixed(0)
        })
      })
  }

  function compare(a, b) {
    if(day.indexOf(a.name) === 0 || day.indexOf(b.name) === 0)
      return 1;

    if(day.indexOf(a.name) < day.indexOf(b.name))
      return -1;
    
    if(day.indexOf(a.name) > day.indexOf(b.name))
      return 1;

    return 0;
  }

  function getFiveDaysHistoricalData(longitude, latitude, time) {
    let date = new Date();
    let currentDayIndex = date.getDay() === 0 ? day.length - 1 : date.getDay() - 1;
    let historicalTime = props.currentTime;
    data = [];

    for(let i = 0; i < 5; i++) {
      historicalTime -= SECONDS_IN_DAY;
      getHistoricalWeatherData(longitude, latitude, historicalTime, currentDayIndex);
      currentDayIndex = currentDayIndex === 0 ? day.length - 1 : currentDayIndex - 1;
    }

    setTimeout(() => {
      data.sort(compare);
      console.log(data);
    }, 1000);
  }

  function createChart() {
    setChart(<ResponsiveContainer width="40%" height="75%">
              <BarChart data={data} barSize={50}>
                <XAxis dataKey="name" />
                <YAxis label={{ value: "°C", position: 'insideLeft' }}/>
                <Bar dataKey="temp" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>);
  }

  console.log(props.reversedColor);
  if(props.reverseColor === true) {
    componentToShow = <div className='hw-container' style={{backgroundImage: "linear-gradient(antiquewhite, white)"}}>
                          {chart}
                      </div>
  } else {
    componentToShow = <div className='hw-container'>
                          {chart}
                      </div>
  }

  return (
      <>
        {componentToShow}
      </>
  );
}

export default HistoricalWeather;