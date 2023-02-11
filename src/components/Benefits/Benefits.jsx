import React from "react";
import "./Benefits.css";

function Benefits() {
  return (
    <section className="video">
      <div className="contns">
        <img className="videovi" src={require("../Images/video.png")} alt="" />
      </div>
      <div>
        <p className="video-p">
          Si el avance tecnológico <br /> no para de avanzar <br />
          <span className="si">¿Tú por qué sí?</span>
        </p>
      </div>
    </section>
  );
}

export default Benefits;
