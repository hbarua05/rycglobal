import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import "./aboutus.css";

export default function Aboutus(props) {
    return (
        <div className="aboutus other-page">
            <Breadcrumb title="OUR STORY" path="/aboutus" location="ABOUT US" />
            <p className="aboutus__description">
                Rise of Youth Community Global, formerly known as Rise of Youth
                Community Bangladesh, is a non-profit youth organisation with a
                vision of empowering the youth of the society. We have a strong
                vision to serve the society via campaigns, spreading education,
                awareness and help to those in need.
            </p>
            <p className="aboutus__secondary">
                See more of what we do and the events we held!
            </p>
            <Link className="cta-btn aboutus__cta-btn" to="/whatwedo">
                What We Do
            </Link>
            <h1 className="title aboutus__title">Partners and Affiliations</h1>
            <ul className="aboutus__partners">
                <li>Youth Partner of Interactive Cares MUN 2020</li>
                <li>Strategic Partner of Changers MUN Nepal 2020</li>
                <li>Youth Engagement Partner of Seize The Day 2020</li>
                <li> Engagement Partner of Ambitious MUN Nepal 2.0</li>
                <li>
                    Academic Partner of OEMACO Public Speaking Competition 2020
                </li>
                <li>Youth Empowerment Partner of ECHO 1.0 </li>
            </ul>
        </div>
    );
}
