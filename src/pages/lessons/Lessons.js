import React from "react";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import ButtonWhite from "../../components/button/ButtonWhite";
import { lessons } from "../../data";
import { useSelector } from "react-redux";
import LessonCard from "../../components/lessonCard/LessonCard";
import "./Lessons.scss";

const Lessons = () => {
  const { isOpenModal } = useSelector((store) => store.modal);
  return (
    <section className="lessons">
      <div className="heading">
        <p className="title">أكملْ دورة اللغة الإنجليزية</p>
        <div className="btns">
          <ButtonWhite content="تعديل" />
          <Button content="أضف درس جديد" />
        </div>
      </div>

      {isOpenModal && <Modal />}

      <div className="lessons-content">
        <div className="lessons-cards">
          <p className="lesson-title"> دورة سياحة و سفر</p>

          {lessons.map((lesson, index) => {
            return (
              <table>
                <tr>
                  <th className="index">#0{index + 1}</th>
                  <th>
                    <LessonCard key={index} lesson={lesson} />
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

export default Lessons;
