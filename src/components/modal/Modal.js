import React from "react";
import close from "../../assets/icons/close.png";
import plus from "../../assets/icons/Plus.png";
import "./Modal.scss";
const Modal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <div className="add-chapter">
        <div className="heading">
          <p>أضف فصل جديد </p>
          <img src={close} onClick={toggleModal} />
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
          <p>إسم الفصل </p>
          <input type="text" />
          <p>وصف</p>
          <input type="text-large" className="text-large"></input>

          <div className="btns">
            <div className="button confirm">حفظ</div>
            <div className="button cancel">إلغاء</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
