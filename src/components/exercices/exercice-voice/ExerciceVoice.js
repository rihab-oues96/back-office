import React from "react";
import voice from "../../../assets/icons/voice.png";
import "./ExerciceVoice.scss";

const ExerciceVoice = () => {
  return (
    <div className="ex-voice">
      <div className="voice-heading">
        <img src={voice} alt="voice-icon" />
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

export default ExerciceVoice;
