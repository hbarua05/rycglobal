import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import "./whatwedo.css";
import Work from "../components/Work";

export default function Whatwedo() {
    return (
        <div className="whatwedo other-page">
            <Breadcrumb
                title="SNEEK PEAK AT RYC GLOBAL"
                path="/whatwedo"
                location="WHAT WE DO"
            />
            <picture>
                <source
                    type="image/webp"
                    srcSet={require("../img/banner.webp")}
                />
                <img
                    className="whatwedo__banner"
                    src={require("../img/banner.jpg")}
                    alt="banner"
                />
            </picture>
            <div className="whatewedo__info">
                <h1 className="title whatwedo__title">Our Work</h1>
                <div className="whatwedo__description">
                    <div className="whatwedo__text">
                        <p className="primary">
                            From the mere thought of using the social media to
                            do something productive to organizing the largest
                            online global public speaking competition, it has
                            been a long ride.
                        </p>
                        <p className="secondary">
                            Since our foundation back in 2016, our team has
                            regularly carried out campaigns, fundraisers,
                            voluntary works and made the best use of the
                            quarantine to organise global events, talk shows and
                            workshops to engage the youths into something
                            productive whilst at home.
                        </p>
                    </div>
                    <div className="work-nav">
                        <a className="work-nav__cta-btn cta-btn" href="#twenty">
                            2020
                        </a>
                        <a
                            className="work-nav__cta-btn cta-btn"
                            href="#nineteen"
                        >
                            2019
                        </a>
                        <a
                            className="work-nav__cta-btn cta-btn"
                            href="#eighteen"
                        >
                            2018
                        </a>
                    </div>
                </div>
            </div>
            <Work />
        </div>
    );
}
