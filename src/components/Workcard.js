import React from "react";

export default function Workcard({ item }) {
    return (
        <div className="work">
            <h2 className="title work__title">{item.title}</h2>
            <div className={`work__card ${item.id % 2 !== 0 ? "" : "reverse"}`}>
                <picture>
                    <source
                        type="image/webp"
                        srcSet={require(`../img/work/${item.imgwebp}`)}
                    />
                    <img
                        src={require(`../img/work/${item.img}`)}
                        alt={item.title}
                        loading="lazy"
                        className="work__img"
                    />
                </picture>
                <div className="work__description">
                    <p className="work__text">{item.description}</p>
                    {item.button.exists ? (
                        <a
                            className="cta-btn work__button"
                            href={item.button.link}
                            target="__blank"
                            rel="noopener noreferrer"
                        >
                            {item.button.text}
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
