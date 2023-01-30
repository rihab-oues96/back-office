import React, { useState } from "react";
import plus from "../../assets/icons/Plus.png";
import close from "../../assets/icons/close.png";
import Button from "../button/Button";
import ButtonWhite from "../button/ButtonWhite";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/ModalSlice";

import "./AddNewLesson.scss";
import { addLesson } from "../../features/lesson/LessonSlice";

const AddNewLesson = () => {
  const dispatch = useDispatch();

  const [lesson, setLesson] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
  });

  const addLessonHandler = () => {
    let newLesson = {
      id: uuidv4(),
      image: lesson.image,
      title: lesson.title,
      description: lesson.description,
    };
    dispatch(addLesson(newLesson));
    dispatch(closeModal());
  };

  return (
    <div className="add-lesson">
      <div className="heading">
        <p>أضف درس جديد </p>
        <img src={close} onClick={() => dispatch(closeModal())} />
      </div>

      <div className="imports">
        <div className="import-img">
          <label for="inputImg">
            <img src={plus} alt="icon-plus" />
          </label>
          <input
            type="file"
            id="inputImg"
            accept="image/png,image/jpeg"
            value={lesson.image}
            onChange={(e) => setLesson({ ...lesson, image: e.target.value })}
          />
        </div>
        <div className="import-file">
          <label className="btn-file" for="inputFile">
            اختر ملف
          </label>
          <input type="file" id="inputFile" />
        </div>
      </div>

      <div className="lesson-content">
        <label>إسم الدرس </label>
        <input
          type="text"
          value={lesson.title}
          onChange={(e) => setLesson({ ...lesson, title: e.target.value })}
        />
        <label>وصف</label>
        <input type="text-large" className="text-large"></input>

        <div className="btns">
          <Button content="حفظ" addLessonHandler={addLessonHandler} />
          <ButtonWhite content="إلغاء" />
        </div>
      </div>
    </div>
  );
};

export default AddNewLesson;
