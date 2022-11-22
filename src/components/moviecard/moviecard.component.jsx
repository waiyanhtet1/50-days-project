import "./movicard.css";
import React from "react";
import ButtonC from "../buttonC/buttonC.component";

const MovieCard = ({ image, buttonC }) => {
  return (
    <div className="movie-card group">
      <img src={image} className="movie-card--image" alt="" />
      <ButtonC {...buttonC} />
    </div>
  );
};

export default MovieCard;
