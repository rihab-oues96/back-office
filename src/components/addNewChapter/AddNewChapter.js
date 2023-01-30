import React, { useState } from "react";
import plus from "../../assets/icons/Plus.png";
import close from "../../assets/icons/close.png";
import Button from "../button/Button";
import ButtonWhite from "../button/ButtonWhite";

import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/ModalSlice";
import { addChapter } from "../../features/chapter/chapterSlice";

import "./AddNewChapter.scss";

const AddNewChapter = () => {
  const dispatch = useDispatch();

  const [chapter, setChapter] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
  });

  const addChapterHandler = () => {
    let newChapter = {
      id: uuidv4(),
      image: chapter.image,
      title: chapter.title,
      description: chapter.description,
    };
    dispatch(addChapter(newChapter));

    dispatch(closeModal());
  };

  return (
    <div className="add-chapter">
      <div className="heading">
        <p>أضف فصل جديد </p>
        <img src={close} onClick={() => dispatch(closeModal())} />
      </div>

      <div className="imports">
        <div className="import-img">
          <label for="inputImg">
            <img src={plus} alt="icon-plus" />
          </label>
          <input
            type="file"
            id="inputImg"
            accept="image/png,image/jpeg"
            value={chapter.image}
            onChange={(e) => setChapter({ ...chapter, image: e.target.value })}
          />
        </div>
        <div className="import-file">
          <label className="btn-file" for="inputFile">
            اختر ملف
          </label>
          <input type="file" id="inputFile" />
        </div>
      </div>

      <div className="chapter-content">
        <label>إسم الفصل </label>
        <input
          type="text"
          value={chapter.title}
          onChange={(e) => setChapter({ ...chapter, title: e.target.value })}
        />
        <label>وصف</label>
        <input
          type="text-large"
          className="text-large"
          value={chapter.description}
          onChange={(e) =>
            setChapter({ ...chapter, description: e.target.value })
          }
        ></input>

        <div className="btns">
          <Button content="حفظ" addChapterHandler={addChapterHandler} />
          <ButtonWhite content="إلغاء" />
        </div>
      </div>
    </div>
  );
};

export default AddNewChapter;
