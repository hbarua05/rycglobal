import React from "react";
import Workcard from "./Workcard";
import "./work.css";

let workItemstwenty = [
    {
        id: 1,
        title: "Online Public Speaking Competition",
        img: "speaking.jpg",
        imgwebp: "speaking.webp",
        description:
            "More than 1000 participants from 6 different continents and 46 countries took part in our event. The competition consisted of more than 10 global mentoring bodies. We were also featured in the Buzzure Media Works.",
        button: {
            exists: false,
        },
    },
    {
        id: 2,
        title: "The Evening Show with Dipro",
        img: "show.jpg",
        imgwebp: "show.webp",
        description:
            "A joint project of The Bangladeshi Perspective and RYC Global where the CEO interviews amazing people from all around the world.",
        button: {
            exists: true,
            link:
                "https://www.facebook.com/watch/1373891752718426/1342814492590447",
            text: "Watch Now",
        },
    },
    {
        id: 3,
        title: "Public Speaking Workshops",
        img: "public.jpg",
        imgwebp: "public.webp",
        description:
            "Scared to speak in public? Want to improve your speaking skils. We got you covered. Join our seminars now to learn more!",
        button: {
            exists: true,
            link:
                "https://www.facebook.com/1373891752718426/videos/926046761174212",
            text: "Join Now",
        },
    },
];
let workItemsnineteen = [
    {
        id: 4,
        title: "Dengue Campaign",
        img: "dengue.jpg",
        imgwebp: "dengue.webp",
        description:
            "Distribution of eco-friendly mosquito coils to three slums of Chittagong, impacting 120+ families. We were featured in The Daily Star, Dainik Purbodesh, DBC News Channel",
        button: {
            exists: true,
            link:
                "https://www.facebook.com/1373891752718426/videos/633417957147108",
            text: "See More",
        },
    },
    {
        id: 5,
        title: "Handwash Campaign",
        img: "handwash.jpg",
        imgwebp: "handwash.webp",
        description:
            "Distributing of soap to 100+ families at a slum in Chittagong. A further seminar and workshop was conducted with the underprivileged children and adults regarding the proper technique and the importance of handwash.",
        button: {
            exists: true,
            link:
                "https://www.facebook.com/1373891752718426/videos/389748015188901",
            text: "See More",
        },
    },
    {
        id: 6,
        title: "Tree Plantation",
        img: "tree.jpg",
        imgwebp: "tree.webp",
        description:
            "1000 Tree Plantation Campaign; Over a thousand trees were planted across the port city of Chittagong to support the movement of the renowned Youtuber, Mr Breast.",
        button: {
            exists: false,
        },
    },
];
let workItemseighteen = [
    {
        id: 7,
        title: "Establishment of Triple Bin System",
        img: "bin.jpg",
        imgwebp: "bin.webp",
        description:
            "Triple Bin System Established in the Hemsenlane Residential Area (Reduce, Reuse, Recycle)",
        button: {
            exists: true,
            link:
                "https://www.facebook.com/1373891752718426/videos/673195219855234",
            text: "See More",
        },
    },
];

export default function Work() {
    return (
        <>
            <div className="worktwenty">
                <h2 id="twenty" className="workyear">
                    2020
                </h2>
                {workItemstwenty.map((item, index) => {
                    return <Workcard item={item} key={index} index={index} />;
                })}
            </div>
            <div className="worknineteen">
                <h2 id="nineteen" className="workyear">
                    2019
                </h2>
                {workItemsnineteen.map((item, index) => {
                    return <Workcard item={item} key={index} index={index} />;
                })}
            </div>
            <div className="workeighteen">
                <h2 id="eighteen" className="workyear">
                    2018
                </h2>
                {workItemseighteen.map((item, index) => {
                    return <Workcard item={item} key={index} index={index} />;
                })}
            </div>
        </>
    );
}
