import React from "react";
import Zaphares from "../Images/zaphares.png"
import Star from "../Images/Star 1.png"

export default function Cards() {
    return (
        <section>
            <img src={Zaphares} alt="Zaphares" />
            <div>
                <img src={Star} alt="star" />
                <p>5.0</p>
                <p>(6)</p>
                <p>· USA</p>
            </div>
                
        </section>
    )
}