import React from "react";
import "./style.scss";
import WeatherChartCard from "../WeatherChartCard/WeatherChartCard";

const HistoricalWeatherChart = (props) => {
   return (
      <div className="historical-weather-chart-container">
         <WeatherChartCard
            ss={props.response[1].data.current.sunset}
            sr={props.response[1].data.current.sunrise}
            day={props.response[1].data.current.dt}
            temperature={Math.round(props.response[1].data.current.temp)}
            weather={props.response[1].data.current.weather[0].id}
         />
         <WeatherChartCard
            ss={props.response[2].data.current.sunset}
            sr={props.response[2].data.current.sunrise}
            day={props.response[2].data.current.dt}
            temperature={Math.round(props.response[2].data.current.temp)}
            weather={props.response[2].data.current.weather[0].id}
         />
         <WeatherChartCard
            ss={props.response[3].data.current.sunset}
            sr={props.response[3].data.current.sunrise}
            day={props.response[3].data.current.dt}
            temperature={Math.round(props.response[3].data.current.temp)}
            weather={props.response[3].data.current.weather[0].id}
         />
         <WeatherChartCard
            ss={props.response[4].data.current.sunset}
            sr={props.response[4].data.current.sunrise}
            day={props.response[4].data.current.dt}
            temperature={Math.round(props.response[4].data.current.temp)}
            weather={props.response[4].data.current.weather[0].id}
         />
         <WeatherChartCard
            ss={props.response[5].data.current.sunset}
            sr={props.response[5].data.current.sunrise}
            day={props.response[5].data.current.dt}
            temperature={Math.round(props.response[5].data.current.temp)}
            weather={props.response[5].data.current.weather[0].id}
         />
      </div>
   );
};

export default HistoricalWeatherChart;
