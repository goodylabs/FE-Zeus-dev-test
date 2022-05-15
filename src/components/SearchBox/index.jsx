/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.scss";
import { findCities } from "../../actions/searchActions";
import { getGeolocationForCity } from "../../actions/weatherActions";
import { dataContext } from "../../context/weatherContext";
import Spinner from "../shared/Spinner";

const SearchBox = () => {
    const [city, setCity] = useState("Łódź");
    const [found, setFound] = useState([]);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(dataContext);

    const listRef = useRef(null);

    const handleSubmit = () => {
        getGeolocationForCity(city, dispatch);
    };

    useEffect(() => {
        const hideList = () => {
            listRef.current.classList.remove("visible");
        };
        document.addEventListener("click", hideList);

        return () => document.removeEventListener("click", hideList);
    }, []);

    useEffect(() => {
        let timeout;
        setLoading(true);
        if (city) {
            timeout = setTimeout(async () => {
                const data = await findCities(city);
                setFound(data);
                setLoading(false);
            }, 300);
        } else {
            setLoading(false);
            setFound([]);
        }

        return () => clearTimeout(timeout);
    }, [city]);

    const handleSelectCity = (item) => {
        setCity(item.name);
        dispatch({
            type: "SET_LOCATION",
            payload: {
                location: {
                    city: item.name,
                    lon: item.lon,
                    lat: item.lat,
                },
            },
        });
    };

    return (
        <div className="searchbox-wrapper">
            <div className="input-wrapper">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onFocus={() => listRef.current.classList.add("visible")}
                    onClick={(e) => {
                        e.stopPropagation();
                        listRef.current.classList.add("visible");
                    }}
                />
                <div className="search-items" ref={listRef}>
                    {loading ? (
                        <Spinner />
                    ) : found.length > 0 ? (
                        found.map((item, index) => (
                            <div
                                key={index}
                                className="search-item"
                                role="button"
                                onClick={() => handleSelectCity(item)}
                                onKeyDown={() => handleSelectCity(item)}
                                tabIndex={index}
                            >
                                <span>{item.name}</span>
                                <span>{item.state}</span>
                            </div>
                        ))
                    ) : (
                        <div className="search-item no-result">No results</div>
                    )}
                </div>
            </div>
            <button onClick={handleSubmit}>Check weather!</button>
        </div>
    );
};

export default SearchBox;
