import React from "react";
import Button from "../../components/button/Button";
import ChapterCard from "../../components/chapterCard/ChapterCard";
import Modal from "../../components/modal/Modal";
import { chapters } from "../../data";
import { useSelector } from "react-redux";

import "./Chapters.scss";

const Chapters = () => {
  const { isOpenModal } = useSelector((store) => store.modal);

  return (
    <section className="chapters">
      {isOpenModal && <Modal form="chapter" />}
      <div className="heading">
        <p className="title">الفصول</p>
        <Button content="أضف فصل جديد" />
      </div>

      <div className="chapters-cards">
        {chapters.map((chapter, index) => {
          return <ChapterCard chapter={chapter} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Chapters;
