import React, { useState, useEffect } from "react";
import "./totopbutton.css";

export default function ToTopButton() {
    let [show, setShow] = useState(false);

    let handleClick = () => {
        window["scrollTo"]({ top: 0, behavior: "smooth" });
    };

    let handleScroll = () => {
        if (window.pageYOffset > 450) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className={`totopbutton ${show ? "" : "hide"}`}>
            <div className="totopbutton__content" onClick={handleClick}>
                <img
                    src={require("../img/arrowc.png")}
                    alt="Scroll To Top"
                    title="Scroll To Top"
                />
            </div>
        </div>
    );
}
