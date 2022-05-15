import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MILISECONDS_IN_DAY = 86400000;

export default function HistoricalWeatherChart(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let promises = [];
        for (let i = 0; i < 5; i++) {
            let date = new Date(Date.now() - (i + 1) * MILISECONDS_IN_DAY);
            promises.push(
                axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${props.lat}&lon=${props.lon}&dt=${parseInt(date.getTime() / 1000)}&appid=91f5ed88ff4adb51496e243844b9f75a&units=metric`)
                    .then(res => res.data)
            );
        }
        Promise.all(promises).then(data => setData(data));
    }, [props.lat, props.lon]);

    if (!data.length)
        return <h2>Loading...</h2>
    else
        return (
            <>
                <Line
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                left: 25,
                                right: 25
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Historical weather',
                            },
                        },
                    }}
                    data={{
                        labels: data.map(a => new Date(a.current.dt * 1000).toDateString()),
                        datasets: [
                            {
                                label: 'Temperature [\u00b0C]',
                                data: data.map(a => Math.round(a.hourly[12].temp)),
                                borderColor: '#1976d2',
                                backgroundColor: '#1976d2',
                            }
                        ],
                    }}
                />
            </>
        );
}