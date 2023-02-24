import React from "react";
import "../Home/Home.css";
import DownloadBtn from "../DownladButton/DownloadBtn";

function Home() {
  return (
    <section className="home">
      <img className="slide" src={require("../Images/Slide.png")} alt="" />
      <img
        className="slideMobile"
        src={require("../Images/SlideMobile.png")}
        alt=""
      />
      <div className="home-content">
        <div>
          <div>
            <h1 className="home-title">
              La herramienta que <br /> te facilita la vida y <br /> te ayuda a
              crecer.
            </h1>
            <p className="home-p">
              ¿Qué esperas para iniciar tu <br /> primer mes gratis?
            </p>
          </div>
          <div className="btn-content">
            <DownloadBtn />
          </div>
        </div>
        <div className="imagePhone_content">
          <img
            className="img_phone"
            src={require("../Images/muckup_phone_front.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
