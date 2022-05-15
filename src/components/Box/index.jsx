import "./style.scss";
import PropTypes from "prop-types";

const Box = ({ children }) => {
    return <div className="box-wrapper">{children}</div>;
};

Box.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Box;
