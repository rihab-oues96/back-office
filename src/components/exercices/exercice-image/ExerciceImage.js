import React from "react";

import image from "../../../assets/icons/image.png";

import "./ExerciceImage.scss";

const ExerciceImage = () => {
  return (
    <div className="ex-image">
      <div className="image-heading">
        <img src={image} alt="image-icon" />
        <p>صورة</p>
      </div>

      <div className="input">
        <input type="text" placeholder="استيراد صورتك " />
        <input type="file" id="file" />
        <label for="file">اختر ملف</label>
      </div>
    </div>
  );
};

export default ExerciceImage;
