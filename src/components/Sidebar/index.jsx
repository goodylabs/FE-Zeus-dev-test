import Searchbar from "../Searchbar";
import SearchHistory from "../SearchHistory";
import "./style.scss";
import { GoTriangleLeft } from "react-icons/go";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div
                className={`sidebar_opener ${isOpen ? "open" : ""}`}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <GoTriangleLeft className={`sidebar_opener_icon ${isOpen ? "open" : ""}`} />
            </div>
            <div className="sidebar_wrapper">
                <Searchbar />
                <SearchHistory />
            </div>
        </div>
    );
};

export default Sidebar;
