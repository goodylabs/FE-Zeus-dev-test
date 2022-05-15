import "./style.scss";
import React, { useState } from "react";
import { getCoordinatesFromName } from "../actions/locationActions";
// import PropTypes from "prop-types";

const SearchItem = (output) => {
    if (output.output) {
        const name = output.output.name;
        const state = output.output.state;
        const country = output.output.country;
        console.log(output.output);
        return (
            <div className="search-item">{`${name}${state ? `, ${state}` : ""}, ${country}`}</div>
        );
    } else {
        return <></>;
    }
};

const search = async (text) => {
    const data = await getCoordinatesFromName(text);
    return data;
};

const Searchbar = () => {
    const [searchOutput, setSearchOutput] = useState({});
    return (
        <div className="searchbar">
            <div className="searchbar_field-wrapper">
                <input
                    className="searchbar_field-wrapper_input"
                    type="search"
                    name="searchbar"
                    id="searchbar"
                    onInput={async (e) => setSearchOutput(await search(e.target.value))}
                />
                <div className="searchbar_field-wrapper_search-items">
                    {searchOutput &&
                        Array.from(Array(searchOutput.length).keys()).map((i) => {
                            return <SearchItem key={`output${i}`} output={searchOutput[i]} />;
                        })}
                </div>
            </div>
        </div>
    );
};

// Searchbar.propTypes = {};

export default Searchbar;
