import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div
        role="img"
        aria-label="click item"
        className={`gameCard ${props.animate? "animated wobble": ""}`} 
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.handleClick(props.id)}
    /> 
);

export default GameCard;
