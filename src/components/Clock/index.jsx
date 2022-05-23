import "./style.scss";
import PropTypes from "prop-types";

const Clock = ({ date, size }) => {
    return (
        <div
            className="clock"
            style={{
                borderRadius: `${size}rem`,
                height: `${size}rem`,
                width: `${size}rem`,
            }}
        >
            <div className="clock_hands">
                <div
                    className="clock_hands_center"
                    style={{
                        borderRadius: `${size}rem`,
                        height: `${size * 0.04}rem`,
                        width: `${size * 0.04}rem`,
                    }}
                />
                <div
                    className="clock_hands_minute"
                    style={{
                        borderRadius: `${size}rem`,
                        height: `${size * 0.45}rem`,
                        width: `${size * 0.03}rem`,
                        transform: `translateX(-50%) rotate(${360 / (60 / date.getMinutes())}deg)`,
                    }}
                />
                <div
                    className="clock_hands_hour"
                    style={{
                        borderRadius: `${size}rem`,
                        height: `${size * 0.3}rem`,
                        width: `${size * 0.03}rem`,
                        transform: `translateX(-50%) rotate(${
                            360 / (60 / date.getHours() / 5)
                        }deg)`,
                    }}
                />
                <div
                    className="clock_hands_second"
                    style={{
                        borderRadius: `${size}rem`,
                        height: `${size * 0.45}rem`,
                        width: `${size * 0.02}rem`,
                        transform: `translateX(-50%) rotate(${360 / (60 / date.getSeconds())}deg)`,
                    }}
                />
            </div>
        </div>
    );
};

Clock.propTypes = {
    date: PropTypes.object.isRequired,
    size: PropTypes.number.isRequired,
};

export default Clock;
