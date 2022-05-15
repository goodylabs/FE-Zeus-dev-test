import React, { useState } from 'react';
import DataPanel from './DataPanel';
import HistoricalDataPanel from './HistoricalDataPanel';

function SearchPanel() {
  const [direction, setDirection] = useState('Łódź');
  const [location, setLocation] = useState('Łódź');

  const handleSubmit = async () => {
    setLocation(direction);
  };

  return (
    <>
      <div className="logo">
        <h1>
          Weather.I
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-sun"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        </h1>
      </div>
      <div className="searchPanel">
        <input
          className="search-location"
          type="text"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          placeholder="Search for new location"></input>
        <label>
          <input className="search-start search-button" type="submit"></input>
          <svg
            onClick={handleSubmit}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 12a5 5 0 1 0 -5 5" />
            <path d="M12 7v-4sm-1" />
            <path d="M12 7v-4m-1" transform="rotate(45 12 12)" />
            <path d="M12 7v-4m-1" transform="rotate(90 12 12)" />
            <path d="M12 7v-4m-1" transform="rotate(180 12 12)" />
            <path d="M12 7v-4m-1" transform="rotate(225 12 12)" />
            <path d="M12 7v-4m-1" transform="rotate(270 12 12)" />
            <path d="M12 7v-4m-1" transform="rotate(315 12 12)" />
            <circle cx="17.5" cy="17.5" r="2.5" />
            <line x1="19.5" y1="19.5" x2="22" y2="22" />
          </svg>
        </label>
      </div>
      <DataPanel direction={location} />
      <HistoricalDataPanel direction={location} />
    </>
  );
}

export default SearchPanel;
