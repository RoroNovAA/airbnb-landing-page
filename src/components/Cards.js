import React from "react";
import Zaphares from "../Images/zaphares.png"
import Star from "../Images/Star 1.png"

export default function Cards(props) {
    let badgeText;
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card-container">
            {
                badgeText && 
                <div className="card-badge">{badgeText}</div>
            }
            <img src={Zaphares}
            alt="Zaphares" className="card-img"/>
                <div className="card-stats">
                    <img src={Star} alt="star" className="star" />
                    <p>{props.stats.rating}</p>
                    <p className="grey">({props.stats.reviewCount}) • {props.location}</p>
                </div>
                <p className="card-title">{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
        </section>
    )
}   