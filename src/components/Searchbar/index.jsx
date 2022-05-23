import "./style.scss";
import React, { useState, useContext } from "react";
import { getCoordinatesFromName } from "../../actions/locationActions";
import { appContext } from "../../AppContext";
import PropTypes from "prop-types";

const select = (item, dispatch) => {
    dispatch({
        type: "SET_CURRENT_LOCATION",
        payload: {
            currentLocation: item,
        },
    });
};
const SearchItem = ({ output }) => {
    const { dispatch, state } = useContext(appContext);
    if (output) {
        const searchName = output.name;
        const searchState = output.state;
        const searchCountry = output.country;
        return (
            <div
                className="search-item"
                onClick={() => {
                    select(output, dispatch);
                    const data = [...state.searchHistory, output];
                    dispatch({
                        type: "SET_SEARCH_HISTORY",
                        payload: data,
                    });
                }}
            >
                {`${searchName}${searchState ? `, ${searchState}` : ""}, ${searchCountry}`}
            </div>
        );
    } else {
        return <></>;
    }
};

SearchItem.propTypes = {
    output: PropTypes.object.isRequired,
};

const search = async (text) => {
    const data = await getCoordinatesFromName(text);
    return data;
};

const Searchbar = () => {
    const { dispatch, state } = useContext(appContext);
    const [searchOutput, setSearchOutput] = useState({});

    return (
        <div className="searchbar">
            <div className="searchbar_field-wrapper">
                <input
                    className="searchbar_field-wrapper_input"
                    type="search"
                    name="searchbar"
                    id="searchbar"
                    placeholder="Search"
                    onInput={async (e) => {
                        setSearchOutput(await search(e.target.value));
                    }}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            select(searchOutput[0], dispatch);
                            const data = [...state.searchHistory, searchOutput[0]];

                            dispatch({
                                type: "SET_SEARCH_HISTORY",
                                payload: data,
                            });
                        }
                    }}
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
