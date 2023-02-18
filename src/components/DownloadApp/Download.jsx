import React from "react";
import "../DownloadApp/Download.css";
import DownloadBtn from "../DownladButton/DownloadBtn";

function Download() {
  return (
    <section className="download_section">
      <div className="download_app">
        <div className="info_content">
          <h4 className="title_downloadApp">
            Descarga la App y empieza tu mes gratis.
          </h4>
          <p className="text_downloadApp">
            Sin hacer ningún pago inicial o vincular tu tarjeta, luego puedes
            elegir una de nuestras membresías.
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
