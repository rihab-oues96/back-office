import React from "react";
import plus from "../../assets/icons/Plus.png";
import close from "../../assets/icons/close.png";
import Button from "../button/Button";
import ButtonWhite from "../button/ButtonWhite";

import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/ModalSlice";

import "./AddNewChapter.scss";

const AddNewChapter = () => {
  const dispatch = useDispatch();
  return (
    <div className="add-chapter">
      <div className="heading">
        <p>أضف فصل جديد </p>
        <img src={close} onClick={() => dispatch(closeModal())} />
      </div>

      <div className="imports">
        <div className="import-img">
          <img src={plus} alt="icon-plus" />
        </div>
        <div className="import-file">
          <div className="btn-file">اختر ملف </div>
        </div>
      </div>

      <div className="chapter-content">
        <label>إسم الفصل </label>
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

export default AddNewChapter;
