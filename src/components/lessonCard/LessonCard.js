import React from "react";
import { Link } from "react-router-dom";
import ButtonWhite from "../button/ButtonWhite";
import points from "../../assets/icons/points.png";

import trash from "../../assets/icons/trash.png";

import "./LessonCard.scss";
import { useDispatch } from "react-redux";
import { deleteLesson } from "../../features/lesson/LessonSlice";

const LessonCard = ({ lesson }) => {
  const dispatch = useDispatch();

  const deleteLessonHandler = (id) => {
    dispatch(deleteLesson({ id }));
  };

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
        <img
          src={trash}
          alt="icon-close"
          className="icon-close"
          onClick={() => deleteLessonHandler(lesson.id)}
        />
      </div>
    </div>
  );
};

export default LessonCard;
