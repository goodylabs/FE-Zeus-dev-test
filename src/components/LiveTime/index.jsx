import "./style.scss";
import Box from "../Box";
import { useState, useEffect } from "react";
import Clock from "../Clock";

const LiveTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);

    const getOrdinalSuffix = (i) => {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return "st";
        }
        if (j == 2 && k != 12) {
            return "nd";
        }
        if (j == 3 && k != 13) {
            return "rd";
        }
        return "th";
    };
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <Box>
            <div className="live-time">
                <Clock date={date} size={6}></Clock>
                <div className="live-time_time">
                    <div>
                        <h1 className="live-time_time_hours">
                            {String(date.getHours()).padStart(2, "0")}
                        </h1>
                        <h1>:</h1>
                        <h1 className="live-time_time_minutes">
                            {String(date.getMinutes()).padStart(2, "0")}
                        </h1>
                    </div>
                    <h3 className="live-time_time_seconds">
                        {String(date.getSeconds()).padStart(2, "0")}
                    </h3>
                </div>
                <div className="live-time_date">
                    <h3 className="live-time_date_weekday">{dayNames[date.getDay()]},</h3>
                    <div>
                        <div className="live-time_date_day">
                            <h3 className="live-time_date_day_number">{date.getDate()}</h3>
                            <h3 className="live-time_date_day_suffix">
                                {getOrdinalSuffix(date.getDay())}
                            </h3>
                        </div>
                        <h3 className="live-time_date_of">of</h3>
                        <h3 className="live-time_date_month">{monthNames[date.getMonth()]}</h3>
                        <h3 className="live-time_date_year">{date.getFullYear()}</h3>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default LiveTime;
