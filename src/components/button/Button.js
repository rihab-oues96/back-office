import React from "react";
import { openModal } from "../../features/modal/ModalSlice";
import { useDispatch } from "react-redux";
import "./Button.scss";

const Button = ({ content, addChapterHandler, addLessonHandler }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(openModal());
    addChapterHandler && addChapterHandler();
    addLessonHandler && addLessonHandler();
  };

  return (
    <div className="button" onClick={onClickHandler}>
      <p className="button-content">{content}</p>
    </div>
  );
};

export default Button;
