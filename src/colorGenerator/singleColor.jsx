import React from "react";

const SingleColor = ({ rgb, weight, index, hexColor, onCopy }) => {
    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;
    return (
        // <div>Single Color</div>
        <div
            className={`color ${index > 10 && "color-light"}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={onCopy}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
        </div>
    );
};

export default SingleColor;

// { rgb, weight, index, hexColor, onCopy }