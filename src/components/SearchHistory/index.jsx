import "./style.scss";
import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { appContext } from "../../AppContext";

const select = (item, dispatch) => {
    dispatch({
        type: "SET_CURRENT_LOCATION",
        payload: {
            currentLocation: item,
        },
    });
};

const SearchHistoryItem = ({ localization }) => {
    const { dispatch, state } = useContext(appContext);
    const searchName = localization.name;
    const searchState = localization.state;
    const searchCountry = localization.country;
    return (
        <div
            className="search-history-item"
            onClick={() => {
                select(localization, dispatch);
                const data = [...state.searchHistory, localization];
                dispatch({
                    type: "SET_SEARCH_HISTORY",
                    payload: data,
                });
            }}
        >{`${searchName}${state ? `, ${searchState}` : ""}, ${searchCountry}`}</div>
    );
};

SearchHistoryItem.propTypes = {
    localization: PropTypes.object.isRequired,
};

const SearchHistory = () => {
    const [historyList, setHistoryList] = useState();
    const { state } = useContext(appContext);

    useEffect(() => {
        setHistoryList(
            <>
                {Array.from(Array(state.searchHistory.length).keys())
                    .reverse()
                    .map((i) => {
                        return <SearchHistoryItem key={i} localization={state.searchHistory[i]} />;
                    })}
            </>
        );
    }, [state.searchHistory]);

    return (
        <div className="search-history">
            <h3 className="search-history_title">Search history</h3>
            <div className="search-history_list">{historyList}</div>
        </div>
    );
};

export default SearchHistory;
