import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import Hamburger from "./Hamburger";
import Navbarlinks from "./Navbarlinks";

export default function Navbar(props) {
    let [openSidebar, setOpenSidebar] = useState(false);
    let [navbarScrolled, setNavbarScrolled] = useState(false);
    let { pathname } = useLocation();
    let [navColorState, setnavColorState] = useState(navbarColor(pathname));
    let toggleSidebar = (e) => {
        if (window.innerWidth <= 850) {
            // If clicked on logo, only toggle sidebar when it is open
            if (e.target.className === "navbar__logo" && openSidebar) {
                setOpenSidebar(!openSidebar);
                // Makes body unscrollable when sidebar open
                props.body.classList.toggle("no-scroll");
                return;
                // If clicked on hamburger or navlinks
            } else if (e.target.className !== "navbar__logo") {
                setOpenSidebar(!openSidebar);
                // Makes body unscrollable when sidebar open
                props.body.classList.toggle("no-scroll");
            }
        }
    };

    // Return color of navbar based on window width and the pathname
    function navbarColor(path) {
        if (window.innerWidth <= 850) {
            return "navbar--scrolled";
        } else {
            if (path === "/") {
                if (navbarScrolled) return "navbar--scrolled";
                return "";
            } else {
                return "navbar--scrolled";
            }
        }
    }
    // Changes navcolor based when scrolled or pathname has been changed
    useEffect(() => {
        setnavColorState(navbarColor(pathname));
    }, [navbarScrolled, pathname]);

    // Handles navbar when resized
    window.addEventListener("resize", function () {
        // Closes the sidebar if window resized when sidebar is open
        if (window.innerWidth >= 850 && openSidebar) {
            setOpenSidebar(false);
            // Makes the body scrollable if sidebar open, the resized to desktop and then come back to mobile
            if (props.body.classList.contains("no-scroll")) {
                props.body.classList.remove("no-scroll");
            }
        }
        // Changes the color of navbar when window is resized
        setnavColorState(navbarColor(pathname));
    });

    window.addEventListener("scroll", function () {
        // If navbar scrolled down for the first time only
        if (window.scrollY > 0 && !navbarScrolled) {
            setNavbarScrolled(true);
        } else if (window.scrollY === 0) {
            setNavbarScrolled(false);
        }
    });

    return (
        <nav id="navbar " className={`navbar ${navColorState}`}>
            <div
                className={`overlay ${openSidebar ? "active" : ""}`}
                onClick={toggleSidebar}
            ></div>
            <Link to="/">
                {
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={require("../img/logo100px.webp")}
                        />
                        <img
                            src={require("../img/logo100px.png")}
                            alt="Logo"
                            className="navbar__logo"
                            onClick={toggleSidebar}
                        />
                    </picture>
                }
            </Link>
            <Navbarlinks open={openSidebar} onClick={toggleSidebar} />
            <Hamburger open={openSidebar} onClick={toggleSidebar} />
        </nav>
    );
}
