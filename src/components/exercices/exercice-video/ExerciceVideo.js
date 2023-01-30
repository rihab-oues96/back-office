import React from "react";
import video from "../../../assets/icons/video.png";
import "./ExerciceVideo.scss";
const ExerciceVideo = () => {
  return (
    <div className="ex-video">
      <div className="video-heading">
        <img src={video} alt="video-icon" />
        <p>فيديو</p>
      </div>

      <div className="input">
        <input type="text" placeholder="استيراد فيديو" />
        <input type="file" id="file" />
        <label for="file">اختر ملف</label>
      </div>
    </div>
  );
};

export default ExerciceVideo;
