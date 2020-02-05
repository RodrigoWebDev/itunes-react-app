//Libs
import React from "react"
import Loader from "../components/Loader"
import "../styles/hero.css"

const Hero = ({ handleChange, handleClick, isFetching}) => (
    <div className="hero">
        <h1>Itunes Search App</h1>
        <input data-testid="input" onChange={handleChange} type="text" />
        <button data-testid="button" onClick={handleClick}>Show Records</button>
        {isFetching && <Loader isFetching={isFetching}/>}
    </div>
)

export default Hero

