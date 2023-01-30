import React from "react";
import text from "../../../assets/icons/text.png";

import "./ExerciceText.scss";

const ExerciceText = () => {
  return (
    <div className="ex-text">
      <div className="text-heading">
        <img src={text} alt="text-icon" />
        <p>نص</p>
      </div>

      <input type="text" placeholder="أضف نصك " />
    </div>
  );
};

export default ExerciceText;
