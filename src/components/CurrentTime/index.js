import React, { useEffect, useState } from "react";
import "./style.scss";
import moment from "moment";

const CurrentTime = () => {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        const timeout = setTimeout(() => setTime(moment()), 1000);

        return () => clearTimeout(timeout);
    }, [time]);

    return (
        <div className="current-time-wrapper">
            <p className="hours">{time.format("HH")}</p>
            <span className="separator">:</span>
            <p className="minutes">{time.format("mm")}</p>
            <span className="separator">:</span>
            <p className="seconds">{time.format("ss")}</p>
        </div>
    );
};

export default CurrentTime;
