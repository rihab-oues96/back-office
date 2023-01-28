import React from "react";
import Button from "../../components/button/Button";
import ButtonWhite from "../../components/button/ButtonWhite";
import ExerciceCard from "../../components/exerciceCard/ExerciceCard";
import "./Lesson.scss";

import { exercices } from "../../data";
import { Link } from "react-router-dom";

const Lesson = () => {
  return (
    <section className="lesson">
      <div className="heading">
        <p className="title">
          <span>الفصل1:</span>
          أكملْ دورة اللغة الإنجليزية
        </p>
        <div className="btns">
          <ButtonWhite content="تعديل" />
          <Link to="/lessons/lesson/newExercice">
            <Button content="أضف تمرين جديد" />
          </Link>
        </div>
      </div>

      <div className="lesson-content">
        <div className="exercices">
          <p className="exercice-title">
            <span>الدرس 1:</span>
            أساسيات السفر
          </p>
          {exercices.map((exercice, index) => {
            return (
              <table>
                <tr>
                  <th className="index">#0{index + 1}</th>
                  <th>
                    <ExerciceCard
                      key={index}
                      qestion={exercice}
                      displayButton={true}
                    />
                  </th>
                </tr>
              </table>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lesson;
