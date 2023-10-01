import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img src="../images/katie-zaferes.png" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">US</span>
            </div>
            <p>Life Lessons with Katie Zafere</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}