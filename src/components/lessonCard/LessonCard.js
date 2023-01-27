import React from "react";
import { Link } from "react-router-dom";
import ButtonWhite from "../button/ButtonWhite";
import points from "../../assets/icons/points.png";

import "./LessonCard.scss";

const LessonCard = ({ lesson }) => {
  return (
    <div className="lesson-card">
      <div className="card-right">
        <div className="icon">
          <img src={points} alt="icon-points" />
        </div>
        <div className="image">
          <img src={lesson.image} alt="image" />
        </div>

        <div className="about-lesson">
          <p className="title"> {lesson.title} </p>
          <p className="description"> {lesson.description}</p>
        </div>
      </div>

      <div className="card-left">
        <Link to="/lessons/lesson">
          <ButtonWhite content="إفتح" />
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
