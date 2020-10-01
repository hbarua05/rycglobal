import React from "react";

export default function Socials(props) {
    let icons = [
        { iconname: "mail.png", link: "mailto:rycglobalofficial@gmail.com" },
        {
            iconname: "facebook.png",
            link: "https://www.facebook.com/RYCGlobal",
        },
        {
            iconname: "instagram.png",
            link: "https://www.instagram.com/rycglobal/",
        },
        {
            iconname: "linkedin.png",
            link: "https://www.linkedin.com/company/rycbangladesh/",
        },
    ];
    return (
        <div className={`${props.location}__socials`}>
            {icons.map((icon, index) => {
                return (
                    <a
                        href={icon.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className={`${props.location}__button`}>
                            <img
                                src={require(`../img/icons/${icon.iconname}`)}
                                alt="social icon"
                                className={`${props.location}__icon`}
                            />
                        </div>
                    </a>
                );
            })}
        </div>
    );
}
