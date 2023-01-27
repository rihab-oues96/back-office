import React from "react";

import { closeModal } from "../../features/modal/ModalSlice";
import { useDispatch } from "react-redux";

import "./ButtonWhite.scss";

const ButtonWhite = ({ content }) => {
  const dispatch = useDispatch();
  return (
    <div className="btn-white" onClick={() => dispatch(closeModal())}>
      <p className="btn-content">{content}</p>
    </div>
  );
};

export default ButtonWhite;
