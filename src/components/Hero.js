import React from "react";
import PhotoGrid from "../Images/photo-grid.png"

export default function Hero() {
    return (
        <section>
            <div className="grid-container">
                <img src={PhotoGrid} alt="photo-grid" />
            </div>
        </section>
    )
}