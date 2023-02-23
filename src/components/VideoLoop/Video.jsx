import React from "react";
import "../VideoLoop/Video.css";
const src = "https://www.youtube.com/embed/rKHcwoz4H1k";

function Video() {
  return (
    <div className="video_content">
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
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
