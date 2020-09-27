import React from "react";

export default function Member({ name, role, img }) {
    return (
        <div className="member">
            <picture>
                <source
                    type="image/webp"
                    srcSet={require(`../img/members/${img}.webp`)}
                />
                <img
                    src={require(`../img/members/${img}.jpg`)}
                    alt={`${name} ${role}`}
                    loading="lazy"
                    className="member__img"
                />
            </picture>
            <p className="member__name">{name}</p>
            <p className="member__role">{role}</p>
        </div>
    );
}
