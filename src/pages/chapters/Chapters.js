import React, { useState } from "react";
import Button from "../../components/button/Button";
import ChapterCard from "../../components/chapterCard/ChapterCard";
import "./Chapters.scss";

import { chapters } from "../../data";
import Modal from "../../components/modal/Modal";

const Chapters = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <section className="chapters">
      {openModal && <Modal toggleModal={toggleModal} />}
      <div className="heading">
        <p className="title">الفصول</p>
        <Button content="أضف فصل جديد" toggleModal={toggleModal} />
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
