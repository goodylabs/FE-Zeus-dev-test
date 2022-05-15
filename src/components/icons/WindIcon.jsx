import { TiLocationArrow } from "react-icons/ti";
import PropTypes from "prop-types";

const WindIcon = ({ windDirection, height }) => {
    return (
        <div
            style={{
                transform: `rotate(${-45 + windDirection}deg)`,
                height: `${height}`,
                aspectRatio: "var(--ratio-square)",
                transition: "transform ease-in-out 0.5s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TiLocationArrow size={`${height * 1.5}rem`} />
        </div>
    );
};

WindIcon.propTypes = {
    windDirection: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default WindIcon;
