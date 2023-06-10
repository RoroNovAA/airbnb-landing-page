import React from "react";
import Zaphares from "../Images/zaphares.png"
import Star from "../Images/Star 1.png"

export default function Cards() {
    return (
        <section className="card-container">
            <div className="card-badge">SOLD OUT</div>
            <img src={Zaphares} 
            alt="Zaphares" className="card-img"/>
            <div className="card-info">
                <div className="card-stats">
                    <img src={Star} alt="star" className="star" />
                    <p></p>
                    <p className="grey">(6) · USA</p>
                </div>
                <p>Life lessons with Katie Zafares</p>
                <p><b>From $136</b> / person</p>
            </div>
        </section>
    )
}