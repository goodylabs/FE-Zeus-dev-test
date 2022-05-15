import React from 'react';

function GetIcon({ apiResponse }) {
  let id = apiResponse.weather[0].id;

  if (id >= 200 && id <= 232) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-cloud-storm"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
        <polyline stroke="yellow" points="13 14 11 18 14 18 12 22" />
      </svg>
    );
  } else if (id >= 300 && id <= 321) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-cloud-rain"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
        <path stroke="blue" d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
      </svg>
    );
  } else if (id >= 500 && id <= 531) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-cloud-rain"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 14a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a4 3.5 0 0 1 0 7" />
        <path d="M8 14v2m0 3v2m4 -4v2m0 3v2" />
        <path d="M16 14v2m0 3v2m4 -4v2m0 3v2" />
      </svg>
    );
  } else if (id >= 600 && id <= 622) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-snowflake"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />
      </svg>
    );
  } else if (id >= 700 && id <= 781) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mist"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 5h3m4 0h9" />
        <path d="M3 10h11m4 0h1" />
        <path d="M5 15h5m4 0h7" />
        <path d="M3 20h9m4 0h3" />
      </svg>
    );
  } else if (id === 800) {
    return (
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
    );
  } else if (id > 800 && id <= 804) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-cloud"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
      </svg>
    );
  }
}

export default GetIcon;
