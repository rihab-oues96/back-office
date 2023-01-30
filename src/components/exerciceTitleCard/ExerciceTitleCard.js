import React from "react";
import points from "../../assets/icons/points.png";
import "./ExerciceTitleCard.scss";

const ExerciceTitleCard = ({ qestion }) => {
  return (
    <div className="exercice-title-card">
      <div className="icon-points">
        <img src={points} alt="icon-points" />
      </div>
      <div className="icon-question">
        <img src={qestion.image} alt="image" />
      </div>

      <div className="about-exercice-card">
        <p className="title-card"> {qestion.title} </p>
        <p className="description-card"> {qestion.description}</p>
      </div>
    </div>
  );
};

export default ExerciceTitleCard;
