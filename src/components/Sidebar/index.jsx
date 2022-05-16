import Searchbar from "../Searchbar";
import SearchHistory from "../SearchHistory";
import "./style.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <Searchbar />
                <SearchHistory />
            </div>
        </div>
    );
};

export default Sidebar;
