import React from "react"
import "../styles/card.css"

const Card = ({ info }) => (
    <div className="card">
        <div>
            <h2 className="card-name">{info.artistName}</h2>
            <h3 className="track-name">{info.trackName}</h3>
            <span>{info.releaseDate}</span>
            <span>{info.trackPrice}</span>
            <span>{info.primaryGenreName}</span>
        </div>
    </div>
)

export default Card;