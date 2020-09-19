import React from "react";

export default function Hamburger({ onClick, open }) {
    return (
        <div
            className={`navbar__hamburger-icon hamburger ${
                open ? "active" : ""
            }`}
            onClick={onClick}
        >
            <div className={"hamburger__bar-up"}></div>
            <div className={"hamburger__bar"}></div>
            <div className={"hamburger__bar-down"}></div>
        </div>
    );
}
