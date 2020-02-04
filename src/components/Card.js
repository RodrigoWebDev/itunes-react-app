import React from "react"
import "../styles/card.css"
import img from "../images/music.jpg"

const Card = ({ info }) => {
    console.log(info.releaseDate);
    const date = new Date(info.releaseDate);
    let dateString = `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`

    return (
        <div className="card">
            <img src={img} alt="music" />
            <h2 className="card-name">{info.artistName}</h2>
            <h3 className="track-name">{info.trackName}</h3>
            <div className="card-info">
                <span><strong>Release:</strong> {dateString}</span>
                <span><strong>Genre:</strong> {info.primaryGenreName}</span>
                <span><strong>$</strong>{info.trackPrice}</span>
            </div>
        </div>
    )
}

export default Card;