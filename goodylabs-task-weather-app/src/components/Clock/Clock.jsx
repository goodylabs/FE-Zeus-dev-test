import React, { useState, useEffect } from "react";
import "./style.scss";

const useCurrentCallback = (callback) => {
   const reference = React.useRef();
   reference.current = callback;
   return (...args) => {
      return reference.current?.(...args);
   };
};

const Clock = () => {
   const [time, setTime] = useState(0);
   const [date, setDate] = useState(0);

   const currentCallback = useCurrentCallback(() => {
      const time = new Date();
      const date = new Date();
      setTime(time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setDate(
         date.toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
         })
      );
   });

   useEffect(() => {
      const handle = setInterval(currentCallback, 1000);
      return () => clearInterval(handle);
   }, []);

   return (
      <div className="clock-container">
         <p>{time}</p>
         <p>{date}</p>
      </div>
   );
};

export default Clock;
