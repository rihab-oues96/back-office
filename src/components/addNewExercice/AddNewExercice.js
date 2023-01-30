import React from "react";

import search from "../../assets/icons/search.png";
import filter from "../../assets/icons/filter.png";
import mobileview from "../../assets/icons/mobile-view.png";
import webView from "../../assets/icons/web-view.png";
import Type from "../../assets/icons/type.png";

import ExerciceTitleCard from "../exerciceTitleCard/ExerciceTitleCard";
import Button from "../../components/button/Button";
import ExerciceImage from "../../components/exercices/exercice-image/ExerciceImage";

import "./AddNewExercice.scss";
import { questionsItems } from "../../data";
import ExerciceQuestion from "../exercices/exercice-question/ExerciceQuestion";
import ExerciceVideo from "../exercices/exercice-video/ExerciceVideo";
import ExerciceWrongRight from "../exercices/exercice-wrong-right/ExerciceWrongRight";

const AddNewExercice = () => {
  return (
    <section className="new-exercice">
      <div className="choice">
        <p className="title">بِناء</p>
        <div className="search-bloc">
          <div className="search">
            <img src={search} alt="search" />
            <input type="text" placeholder="ابحث عن أى شيء ... " />
          </div>
          <div className="icon">
            <img src={filter} alt="filter-icon" />
          </div>
        </div>
        <div className="exercice-cards">
          {questionsItems.map((question, index) => {
            return <ExerciceTitleCard key={index} qestion={question} />;
          })}
        </div>
      </div>

      <div className="display-exercice">
        <div className="heading">
          <p className="title">
            إسم التمرين:
            <span>
              نصيحة
              <img src={Type} alt="icon-pen" />
            </span>
          </p>
          <Button content="حفظ" />
        </div>

        <div className="content">
          <div className="nav">
            <div className="view mobile-view">
              <p> mobile view</p>
              <img src={mobileview} alt="mobile-icon" />
            </div>

            <div className="view web-view">
              <p> web view</p>
              <img src={webView} alt="web-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="regulations">
        <p className="title">ضوابط</p>
        <div className="exercices">
          <ExerciceQuestion />
          <ExerciceImage />
          <ExerciceVideo />
          <ExerciceWrongRight />
        </div>
      </div>
    </section>
  );
};

export default AddNewExercice;
