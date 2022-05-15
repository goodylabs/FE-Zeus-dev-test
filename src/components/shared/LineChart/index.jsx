import React from "react";
import "./style.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: { ticks: { maxTicksLimit: 8 } },
    },
};

const LineChart = ({ labels, data, meta, title }) => {
    const chartData = {
        labels,
        datasets: [
            {
                ...meta,
                data,
            },
        ],
    };

    return (
        <div className="line-chart-wrapper">
            {title && (
                <p>
                    {title} [{meta.unit}]
                </p>
            )}
            <Line options={options} data={chartData} />
        </div>
    );
};

export default LineChart;
