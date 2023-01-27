import React from "react";
import AddNewChapter from "../addNewChapter/AddNewChapter";
import AddNewLesson from "../addNewLesson/AddNewLesson";
import "./Modal.scss";

const Modal = ({ form }) => {
  return (
    <div className="modal">
      {form === "chapter" ? <AddNewChapter /> : <AddNewLesson />}
    </div>
  );
};

export default Modal;
