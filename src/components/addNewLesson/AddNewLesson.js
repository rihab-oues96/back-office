import React from "react";
import plus from "../../assets/icons/Plus.png";
import close from "../../assets/icons/close.png";
import Button from "../button/Button";
import ButtonWhite from "../button/ButtonWhite";

import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/ModalSlice";

import "./AddNewLesson.scss";

const AddNewLesson = () => {
  const dispatch = useDispatch();
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
          <input type="file" id="inputImg" accept="image/png,image/jpeg" />
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
        <input type="text" />
        <label>وصف</label>
        <input type="text-large" className="text-large"></input>

        <div className="btns">
          <Button content="حفظ" />
          <ButtonWhite content="إلغاء" />
        </div>
      </div>
    </div>
  );
};

export default AddNewLesson;
