import Searchbar from "../../Searchbar";
import "./style.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <Searchbar />
            </div>
        </div>
    );
};

export default Sidebar;
