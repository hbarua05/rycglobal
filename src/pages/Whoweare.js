import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Member from "../components/Member";
import "./whoweare.css";

let members = [
    { name: "Dipro Prattoy", role: "Founder and CEO", img: "dipro300px" },
    {
        name: "Ishmam Chowdhury",
        role: "Chief Operation Officer",
        img: "ishmam300px",
    },
    {
        name: "Sadikshya Shresta",
        role: "Chief Marketing Officer",
        img: "sadik300px",
    },
    {
        name: "Yasir Mohiuddin",
        role: "Chief of Graphics",
        img: "yasir300px",
    },
    {
        name: "Sajid Bin Mahamud",
        role: "Chief of Academics",
        img: "sajid300px",
    },
    { name: "Dinyar Islam", role: "Chief of Finance", img: "dinyar300px" },
    { name: "Ennio Campoli Patak", role: "Chief of IR", img: "ennio300px" },
    { name: "Tanjim", role: "Chief of CR", img: "tanjim300px" },
];

export default function Whoweare() {
    return (
        <div className="whoweare other-page">
            <Breadcrumb
                title="OUR TEAM"
                path="/whoweare"
                location="WHO WE ARE"
            />
            <div className="members">
                {members.map((member) => {
                    return (
                        <Member
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            img={member.img}
                        />
                    );
                })}
            </div>
        </div>
    );
}
