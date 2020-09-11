import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ title, path, location }) {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__title">{title}</div>
            <div className="breadcrumb__location">
                <Link to="/" className="breadcrumb__link">
                    HOME
                </Link>
                <span>&gt;</span>
                <Link to={path} className="breadcrumb__link">
                    {location}
                </Link>
            </div>
        </div>
    );
}
