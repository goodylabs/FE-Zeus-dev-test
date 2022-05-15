import React, { useContext } from "react";
import "./style.scss";
import Card from "../../shared/Card";
import LineChart from "../../shared/LineChart";
import moment from "moment";
import { dataContext } from "../../../context/weatherContext";

const graphsMetadata = [
    {
        label: "Temperature",
        id: "temp",
        unit: "°C",
        borderColor: "rgb(248, 86, 28)",
        backgroundColor: "rgb(175, 51, 6)",
    },
    {
        label: "Humidity",
        id: "humidity",
        unit: "%",
        borderColor: "rgb(13, 73, 156)",
        backgroundColor: "rgb(2, 49, 115)",
    },
    {
        label: "Pressure",
        id: "pressure",
        unit: "hPa",
        borderColor: "rgb(77, 160, 28)",
        backgroundColor: "rgb(49, 125, 5)",
    },
    {
        label: "Wind speed",
        id: "windSpeed",
        unit: "m/s",
        borderColor: "rgb(160, 28, 160)",
        backgroundColor: "rgb(114, 7, 114)",
    },
];

const WeatherHistory = () => {
    const { state } = useContext(dataContext);
    const data = state.weather.history;

    const labels = data
        .flat()
        .reverse()
        .map((item) => moment.unix(item.time).format("DD.MM HH:mm"));

    return (
        <Card className="weather-history-wrapper" title="Last 5 days">
            {graphsMetadata.map((meta, index) => (
                <LineChart
                    labels={labels}
                    data={data.reverse().map((d) => d[meta.id])}
                    meta={meta}
                    title={meta.label}
                    key={index}
                />
            ))}
        </Card>
    );
};

export default WeatherHistory;
