import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import "./contactus.css";
import Socials from "../components/Socials";
import Facebook from "../components/Facebook";

export default function Contactus(props) {
    return (
        <div className="contactus other-page">
            <Breadcrumb
                title="GET IN TOUCH"
                path="/contactus"
                location="CONTACT US"
            />
            <h1 className="title contactus__title">Contact Us</h1>
            <Socials location="contactus" />
            <div className="contactus__forum">
                <h2 className="title forum__title">
                    Want To Make a Difference?
                </h2>
                <p className="forum__description">
                    Join the Rise of Youth Community Global (RYC Global) Forum
                    to get notified about all the upcoming events, workshops,
                    interviews, chit chats and the fun stuff we have in store
                    for you!
                </p>
                <a
                    className="cta-btn forum__btn"
                    href="https://www.facebook.com/groups/1289509467919183/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Join Us!
                </a>
            </div>
            <Facebook other={true} />
        </div>
    );
}
