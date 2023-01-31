import React from "react";
import linkCards from "../../../assets/icons/linkCards.png";

import "./ExerciceLinkCards.scss";

const ExerciceLinkCards = () => {
  return (
    <div className="ex-link-cards">
      <div className="link-cards-heading">
        <img src={linkCards} alt="linkcards-icon" />
        <p> توصيل البطاقات</p>
      </div>

      <div className="first-element">
        <div className="dash"></div>
        <div className="content">
          <p>السؤال</p>
          <input type="text" placeholder="أضف المعلومات المرادفة" />
          <p>إجابته</p>
          <input type="text" placeholder="أضف الاجابة المناسبة" />
        </div>
        <div className="dash"></div>
      </div>

      <div className="second-element">
        <div className="dash"></div>
        <div className="content">
          <p>السؤال</p>
          <input type="text" placeholder="أضف المعلومات المرادفة" />
          <p>إجابته</p>
          <input type="text" placeholder="أضف الاجابة المناسبة" />
        </div>
        <div className="dash"></div>
      </div>
    </div>
  );
};

export default ExerciceLinkCards;
