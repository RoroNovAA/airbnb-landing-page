import React from "react";
import Zaphares from "../Images/zaphares.png"
import Star from "../Images/Star 1.png"

export default function Cards(props) {
    return (
        <section className="card-container">
            <div className="card-badge">SOLD OUT</div>
            <img src={Zaphares}
            alt="Zaphares" className="card-img"/>
                <div className="card-stats">
                    <img src={Star} alt="star" className="star" />
                    <p>{props.rating}</p>
                    <p className="grey">({props.reviewCount}) • {props.location}</p>
                </div>
                <p className="card-title">{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
        </section>
    )
}   