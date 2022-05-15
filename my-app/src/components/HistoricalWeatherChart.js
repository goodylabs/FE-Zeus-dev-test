import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MILISECONDS_IN_DAY = 86400000;

export default function HistoricalWeatherChart(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let promises = [];
        for (let i = 0; i < 5; i++) {
            let date = new Date(Date.now() - (i + 1) * MILISECONDS_IN_DAY);
            promises.push(
                axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${props.lat}&lon=${props.lon}&dt=${parseInt(date.getTime() / 1000)}&appid=a1b3aa55dfdd1a4c2918936703528115&units=metric`)
                    .then(res => res.data)
                    .catch(err => setError(err))
            );
        }
        Promise.all(promises).then(data => setData(data));
    }, [props.lat, props.lon]);

    if (error)
        return <h2>Error</h2>
    else if (!data)
        return <h2>Loading...</h2>
    else
        return (
            <Box minHeight={300}>
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
            </Box>
        );
}