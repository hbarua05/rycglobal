import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";
import "./footer.css";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Socials location="footer" />
                <a
                    className="footer__cta-btn"
                    href="https://www.facebook.com/groups/1289509467919183/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Join Our Forum!
                </a>
                <ul className="footer__links">
                    <li>
                        <NavLink
                            className="footer__link"
                            activeClassName="active"
                            to="/contactus"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer__link"
                            activeClassName="active"
                            to="/aboutus"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer__link"
                            activeClassName="active"
                            to="/whoweare"
                        >
                            Who We Are
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer__link"
                            activeClassName="active"
                            to="/whatwedo"
                        >
                            What We Do
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer__link"
                            activeClassName="active"
                            exact
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <p className="copyright">&copy; Copyright. All Rights Reserved.</p>
        </>
    );
}
