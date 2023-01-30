import React from "react";
import wrongRight from "../../../assets/icons/wrong-right.png";

import "./ExerciceWrongRight.scss";

const ExerciceWrongRight = () => {
  return (
    <div className="wrong-right-exercice">
      <div className="wrong-right-heading">
        <img src={wrongRight} alt="wrong-right-icon" />
        <p>صحيحة أو خاطئة</p>
      </div>

      <div className="dash"></div>
      <div className="wrong-right-content">
        <p className="question-p">الإجابة الملائمة (للفيديو, للصورة...)</p>
        <ul>
          <li>
            <div className="circle"></div> صحيح
          </li>
          <li>
            <div className="circle"></div> خاطئ
          </li>
        </ul>
        <p className="input-p">إجابة صحيحة</p>
        <input type="text" placeholder="أضف إجابة صحيحة" />
      </div>
      <div className="dash"></div>
    </div>
  );
};

export default ExerciceWrongRight;
