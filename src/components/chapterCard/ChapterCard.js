import React from "react";
import "./ChapterCard.scss";

const ChapterCard = ({ chapter }) => {
  return (
    <div className="chapter-card">
      <img src={chapter.image} alt="image" />
      <div className="description">
        <p className="title">{chapter.title}</p>
        <p className="desc">{chapter.description}</p>
      </div>
    </div>
  );
};

export default ChapterCard;
