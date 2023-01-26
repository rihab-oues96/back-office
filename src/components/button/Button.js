import React from "react";
import "./Button.scss";

const Button = ({ content, toggleModal }) => {
  return (
    <div className="btn" onClick={toggleModal}>
      <p className="btn-p">{content}</p>
    </div>
  );
};

export default Button;
