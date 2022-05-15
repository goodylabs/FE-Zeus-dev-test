import React from "react";
import "./style.scss";

const Card = ({ className, children, title }) => {
    return (
        <div className={`card-wrapper ${className ? className : ""}`}>
            {title && (
                <div className="card-header">
                    <h3>{title}</h3>
                </div>
            )}
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Card;
