import React from "react";
import question from "../../../assets/icons/question.png";

import "./ExerciceQuestion.scss";

const ExerciceQuestion = () => {
  return (
    <div className="ex-question">
      <div className="question-heading">
        <img src={question} alt="question-icon" />
        <p>سؤال</p>
      </div>

      <input type="text" placeholder="أضف سؤالك" />
    </div>
  );
};

export default ExerciceQuestion;
