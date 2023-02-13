import React from "react";
import { useState } from "react";
import "./Nav.css";
import Logo from "../Images/BeunikPRO.png";
import IconHamburger from "../Images/icon-hamburger.svg";
import BenefitIcon from "../Images/benefit_icon.svg";
import DownloadIcon from "../Images/download_icon.svg";
import MembershipIcon from "../Images/membership_icon.svg";
import TestimonyIcon from "../Images/testimony_icon.svg";
import ContactIcon from "../Images/contact_icon.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`nav ${menuOpen ? "bg-hamburger" : ""}`}>
        <div className={`nav-logo ${menuOpen ? "end" : ""}`}>
          <img
            className={`logo ${menuOpen ? "closed" : ""}`}
            src={Logo}
            alt=""
          />
          <img
            className={`icon-hamburger ${menuOpen ? "end" : ""}`}
            src={IconHamburger}
            alt=""
            onClick={handleClick}
          />
        </div>
        <div className={`nav-menu ${menuOpen ? "open" : "closed"}`}>
          <div>
            <img className="logo-hamburger" src={Logo} alt="" />
          </div>
          <div className="links-content">
            <div className="links">
              <img className="link_icon" src={BenefitIcon} alt="" />
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Beneficios
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={DownloadIcon} alt="" />
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Descargas
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={MembershipIcon} alt="" />
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Membresías
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={TestimonyIcon} alt="" />
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Testimonios
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={ContactIcon} alt="" />
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
