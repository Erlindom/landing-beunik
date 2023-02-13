import React from "react";
import PlaystoreIcon from "../Images/icon_PlayStore.svg";
import ApplestoreIcon from "../Images/icon_AppleStore.svg";
import "../DownladButton/DownloadBtn.css";

function DownloadBtn() {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.beunik_clients"
        className="btn-store"
        target="_blank"
        rel="noreferrer"
      >
        <img className="icon_store" src={PlaystoreIcon} alt="" />
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
        <img className="icon_store" src={ApplestoreIcon} alt="" />
        <span>
          Descarga para <br /> <span className="store">iOS</span>
        </span>
      </a>
    </>
  );
}

export default DownloadBtn;
