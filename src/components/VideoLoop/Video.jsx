import React from "react";
import "../VideoLoop/Video.css";

function Video() {
  return (
    <div className="video_content">
      <div className="video">
        <img
          className="preview_video"
          src={require("../Images/video.png")}
          alt=""
        />
      </div>
      <div className="textVideo_content">
        <p className="video-p">
          Si el avance tecnológico <br /> no para de avanzar <br />
          <span className="text_bold_video">¿Tú por qué sí?</span>
        </p>
      </div>
    </div>
  );
}

export default Video;
