// import axios from "axios";
import React, { useState } from "react";
import "./style.scss";
const LocationSearchCard = () => {
   let [loc, setLoc] = useState("");
   return (
      <div className="location-search-card-container">
         <p className="search-bar-header">Search for your location:</p>
         <form className="form-container">
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
