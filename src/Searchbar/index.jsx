import "./style.scss";
import React, { useState, useContext } from "react";
import { getCoordinatesFromName } from "../actions/locationActions";
import { appContext } from "../AppContext";

const SearchItem = (output) => {
    const { dispatch } = useContext(appContext);

    const select = () => {
        dispatch({
            type: "SET_CURRENT_LOCATION",
            payload: {
                currentLocation: output.output,
            },
        });
    };

    if (output.output) {
        const name = output.output.name;
        const state = output.output.state;
        const country = output.output.country;
        return (
            <div className="search-item" onClick={select}>
                {`${name}${state ? `, ${state}` : ""}, ${country}`}
            </div>
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

export default Searchbar;
