import React from "react";
import "../Home/Home.css";
import PlaystoreIcon from "../Images/icon_PlayStore.svg";
import ApplestoreIcon from "../Images/icon_AppleStore.svg";

function Home() {
  return (
    <section className="home">
      <img className="slide" src={require("../Images/Slide.png")} alt="" />
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
            <a
              href="https://play.google.com/store/apps/details?id=com.beunik_clients"
              className="btn-store"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PlaystoreIcon} alt="" />
              <span>
                Descarga para <br /> <span className="store">Android</span>
              </span>
            </a>

            <a
              href="https://apps.apple.com/co/app/beunik-pro/id1620465162"
              className="btn-store"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ApplestoreIcon} alt="" />
              <span>
                Descarga para <br /> <span className="store">iOS</span>
              </span>
            </a>
          </div>
        </div>
        <div className="cosm">
          <img
            className="imgcelular"
            src={require("../Images/muckup_phone_front.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
