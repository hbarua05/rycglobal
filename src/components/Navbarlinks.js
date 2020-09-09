import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbarlinks(props) {
    // Returns the current className
    let returnNavClassName = () => {
        return window.innerWidth <= 850
            ? props.open
                ? "navbar__links--open"
                : "navbar__links--mobile"
            : "navbar__links";
    };
    // Event Listener to change NavbarLinks className when window resized
    window.addEventListener("resize", function (e) {
        document.getElementById(
            "navbar__links"
        ).className = returnNavClassName();
    });
    return (
        <ul id="navbar__links" className={returnNavClassName()}>
            <li>
                <NavLink
                    to="/whatwedo"
                    className="navbar__link"
                    activeClassName="navbar__link--active"
                    onClick={props.onClick}
                >
                    WHAT WE DO
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/whoweare"
                    className="navbar__link"
                    activeClassName="navbar__link--active"
                    onClick={props.onClick}
                >
                    WHO WE ARE
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/aboutus"
                    className="navbar__link"
                    activeClassName="navbar__link--active"
                    onClick={props.onClick}
                >
                    ABOUT US
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contactus"
                    className="navbar__link"
                    activeClassName="navbar__link--active"
                    onClick={props.onClick}
                >
                    CONTACT US
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/donate"
                    className="navbar__donate"
                    activeClassName="navbar__donate--active"
                    onClick={props.onClick}
                >
                    DONATE
                </NavLink>
            </li>
        </ul>
    );
}
