import React from "react";
import "./home.css";
import Facebook from "../components/Facebook";
import { NavLink } from "react-router-dom";

export default function Home(props) {
    return (
        <>
            <picture>
                <source
                    type="image/webp"
                    media="(max-width: 850px)"
                    srcSet={require("../img/hero850px.webp")}
                />
                <source
                    type="image/webp"
                    media="(max-width: 1000px)"
                    srcSet={require("../img/hero1000px.webp")}
                />
                <source
                    type="image/webp"
                    media="(max-width: 1200px)"
                    srcSet={require("../img/hero1200px.webp")}
                />
                <source
                    type="image/webp"
                    media="(max-width: 1500px)"
                    srcSet={require("../img/hero1500px.webp")}
                />
                <source
                    type="image/webp"
                    media="(min-width: 1501px)"
                    srcSet={require("../img/hero1800px.webp")}
                />
                <img
                    className="hero"
                    src={require("../img/hero.jpg")}
                    alt="hero"
                ></img>
            </picture>
            <div className="intro">
                <h1 className="title intro__title">Make A Difference</h1>
                <p className="intro__description">
                    Rise of Youth Community Global, formerly known as Rise of
                    Youth Community Bangladesh, is a non-profit youth
                    organisation with a vision of empowering the youth of the
                    society.
                </p>
                <NavLink to="/donate" className="intro__cta-btn cta-btn">
                    Donate
                </NavLink>
            </div>
            <div className="episode">
                <img
                    className="episode__pic"
                    src={require("../img/work/show.jpg")}
                    alt="Interview with Dipro"
                    loading="lazy"
                />
                <div className="episode__description-container">
                    <p className="episode__description">
                        RYC Global Founder & CEO, Dipro Prattoy, interviews
                        amazing people around the world through The Bangladeshi
                        Perspective.
                    </p>
                    <a
                        href="https://www.facebook.com/watch/1373891752718426/1342814492590447"
                        className="episode__cta-btn cta-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch Now
                    </a>
                </div>
            </div>
            <Facebook />
        </>
    );
}
