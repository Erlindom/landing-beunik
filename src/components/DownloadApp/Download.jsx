import React from "react";
import "../DownloadApp/Download.css";
import DownloadBtn from "../DownladButton/DownloadBtn";

function Download() {
  return (
    <section className="download_section">
      <div className="download_app">
        <div>
          <h4 className="title_downloadApp">
            Descarga la App y empieza <br /> tu mes gratis.
          </h4>
          <p className="text_downloadApp">
            Sin hacer ningún pago inicial o vincular tu tarjeta, <br /> luego
            puede elegir una de nuestras membresías.
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
