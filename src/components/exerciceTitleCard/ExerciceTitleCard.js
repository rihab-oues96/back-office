import React from "react";
import { useDispatch } from "react-redux";
import points from "../../assets/icons/points.png";
import { selectExercice } from "../../features/selectExercice/SelectExerciceSlice";
import "./ExerciceTitleCard.scss";

const ExerciceTitleCard = ({ question }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="exercice-title-card"
      onClick={() => dispatch(selectExercice({ name: question.name }))}
    >
      <div className="icon-points">
        <img src={points} alt="icon-points" />
      </div>
      <div className="icon-question">
        <img src={question.image} alt="image" />
      </div>

      <div className="about-exercice-card">
        <p className="title-card"> {question.title} </p>
        <p className="description-card"> {question.description}</p>
      </div>
    </div>
  );
};

export default ExerciceTitleCard;
