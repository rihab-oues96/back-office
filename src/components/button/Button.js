import React from "react";
import { openModal } from "../../features/modal/ModalSlice";
import { useDispatch } from "react-redux";
import "./Button.scss";

const Button = ({ content }) => {
  const dispatch = useDispatch();
  return (
    <div className="button" onClick={() => dispatch(openModal())}>
      <p className="button-content">{content}</p>
    </div>
  );
};

export default Button;
