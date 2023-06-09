import React from "react";
import PhotoGrid from "../Images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="grid-container">
                <img src={PhotoGrid} alt="photo-grid" />
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}