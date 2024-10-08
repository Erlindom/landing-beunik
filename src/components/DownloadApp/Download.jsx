import React from "react";
import "../DownloadApp/Download.css";
import DownloadBtn from "../DownladButton/DownloadBtn";
import IconStep1 from "../Images/icon_step1.svg";
import IconStep2 from "../Images/icon_step2.svg";
import IconStep3 from "../Images/icon_step3.svg";
import IconStep4 from "../Images/icon_step4.svg";

function Download() {
  return (
    <section className="download_section" id="download">
      <div className="steps_download_content">
        <h4 className="title_stepsDownload">
          Descarga la App y empieza tu mes gratis
        </h4>
        <div className="steps_download">
          <div className="stepp">
            <img className="icon_steps" src={IconStep1} alt="" />
            <p className="text_step">Descarga</p>
          </div>
          <div className="stepp">
            <img className="icon_steps" src={IconStep2} alt="" />
            <p className="text_step">Regístrate</p>
          </div>
          <div className="stepp">
            <img className="icon_steps" src={IconStep3} alt="" />
            <p className="text_step">Configura</p>
          </div>
          <div className="stepp">
            <img className="icon_steps" src={IconStep4} alt="" />
            <p className="text_step">
              Comparte <br /> tu perfil
            </p>
          </div>
        </div>
      </div>
      <div className="download_app">
        <div className="info_content">
          <p className="text_downloadApp">
            <span className="text_downloadAppBold">
              Sin cláusulas de permanencia y sin pago inicial.
            </span>{" "}
            <br /> Descubre el paso a paso para{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.beunik_clients"
              target="_blank"
              rel="noreferrer"
              className="link_createProfile"
            >
              crear tu perfil aquí
            </a>
          </p>
        </div>
        <div className="downloadApp_btn">
          <DownloadBtn />
        </div>
      </div>
    </section>
  );
}

export default Download;
