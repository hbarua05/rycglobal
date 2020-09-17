import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import "./donate.css";

export default function Donate() {
    return (
        <div className="donate other-page">
            <Breadcrumb title="SUPPORT US" path="/donate" location="DONATE" />
            <p className="note">
                <b>Note</b>: We currently only support donations from Bangladesh
                and Nepal. We hope to expand to international donations in the
                near future!
            </p>
            <div className="donate__method-container">
                <div className="donate__title">
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={require("../img/bdflag.webp")}
                        />
                        <img
                            src={require("../img/bdflag.png")}
                            alt="bangladeshi flag"
                        />
                    </picture>
                    <h2 className="title donate__country">Bangladesh</h2>
                </div>

                <h2 className="donate__method">Bkash</h2>
                <p className="donate__info">
                    <b>Number</b>: +8801819323085
                </p>
            </div>
            <div>
                <div className="donate__title">
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={require("../img/npflag.webp")}
                        />
                        <img
                            src={require("../img/npflag.png")}
                            alt="bangladeshi flag"
                        />
                    </picture>
                    <h2 className="title donate__country">Nepal</h2>
                </div>
                <ul className="donate__method-container">
                    <li>
                        <ul>
                            <h2 className="donate__method">eSewa</h2>
                            <li className="donate__info">
                                <b>ID</b>: 9844665734
                            </li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h2 className="donate__method">Bank</h2>
                            <li className="donate__info">
                                <b>Bank name</b>: Global IME Bank ltd
                            </li>
                            <li className="donate__info">
                                <b>Account name</b>: Aadarsha Dev
                            </li>
                            <li className="donate__info">
                                <b>Account no</b>: 1507010006525
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
