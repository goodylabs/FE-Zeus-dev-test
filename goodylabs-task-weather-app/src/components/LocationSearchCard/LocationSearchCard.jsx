import React, { useContext, useState } from "react";
import "./style.scss";
import { LocationContext } from "../../context/LocationContext";
import axios from "axios";

const LocationSearchCard = () => {
   const { dispatch } = useContext(LocationContext);
   const [loc, setLoc] = useState("");

   const onSubmit = (e) => {
      e.preventDefault();

      axios
         .get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
         )
         .then((res) => {
            const [location] = res.data;
            const { lat, lon } = location;

            dispatch({
               type: "SET_LOCATION",
               payload: { location: { lat, lon } },
            });
         });
   };

   return (
      <div className="location-search-card-container">
         <p className="search-bar-header">Search for your location:</p>
         <form className="form-container" onSubmit={onSubmit}>
            <input
               type="text"
               className="search-bar-input"
               value={loc}
               onChange={(e) => {
                  setLoc(e.target.value);
               }}
            />
            <input type="submit" className="button-30" value="Change your location" />
         </form>
      </div>
   );
};

export default LocationSearchCard;
