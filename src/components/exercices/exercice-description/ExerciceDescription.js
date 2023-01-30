import React from "react";
import description from "../../../assets/icons/description.png";
import "./ExerciceDescription.scss";

const ExerciceDescription = () => {
  return (
    <div className="ex-description">
      <div className="description-heading">
        <img src={description} alt="description-icon" />
        <p>وصف</p>
      </div>

      <input type="text" placeholder="أضف نصك" />
    </div>
  );
};

export default ExerciceDescription;
