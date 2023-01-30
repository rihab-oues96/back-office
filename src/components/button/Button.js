import React from "react";
import { openModal } from "../../features/modal/ModalSlice";
import { useDispatch } from "react-redux";
import "./Button.scss";

const Button = ({ content, addChapterHandler }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(openModal());
    addChapterHandler && addChapterHandler();
  };

  return (
    <div className="button" onClick={onClickHandler}>
      <p className="button-content">{content}</p>
    </div>
  );
};

export default Button;
