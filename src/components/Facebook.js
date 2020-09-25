import React from "react";

export default function Facebook(props) {
    return (
        <div className={props.other ? "" : "fb-btn"}>
            <iframe
                rel="preload"
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FRYCGlobal&width=450&layout=standard&action=like&size=small&share=true&height=35&appId"
                // width="300"
                height="50"
                title="Facebook Like and Share"
                style={{
                    border: "none",
                    overflow: "hidden",
                }}
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
            ></iframe>
        </div>
    );
}
