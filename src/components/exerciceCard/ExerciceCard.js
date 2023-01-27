import React from "react";
import ButtonWhite from "../button/ButtonWhite";
import points from "../../assets/icons/points.png";
import "./ExerciceCard.scss";
const ExerciceCard = ({ exercice }) => {
  console.log();
  return (
    <div className="exercice-card ">
      <div className="card-right">
        <div className="icon">
          <img src={points} alt="icon-points" />
        </div>
        <div className="image">
          <img src={exercice.image} alt="image" />
        </div>

        <div className="about-card">
          <p className="title"> {exercice.title} </p>
          <p className="description"> {exercice.description}</p>
        </div>
      </div>

      <div className="card-left">
        <ButtonWhite content="افتح المنشئ" />
      </div>
    </div>
  );
};

export default ExerciceCard;