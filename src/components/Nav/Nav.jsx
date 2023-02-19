import React from "react";
import { useState } from "react";
import "./Nav.css";
import Logo from "../Images/BeunikPRO.png";
import BenefitIcon from "../Images/benefit_icon.svg";
import DownloadIcon from "../Images/download_icon.svg";
import MembershipIcon from "../Images/membership_icon.svg";
import TestimonyIcon from "../Images/testimony_icon.svg";
import ContactIcon from "../Images/contact_icon.svg";
import IconHamburger from "../Images/icon_menuBurger.svg";
import IconClose from "../Images/icon_x.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img className="logo" src={Logo} alt="" />
          <img
            className="icon-hamburger"
            src={IconHamburger}
            alt=""
            onClick={handleClick}
          />
        </div>
        <div className="navMenuDesktop">
          <div className="links-content">
            <div className="links">
              <img className="link_icon" src={BenefitIcon} alt="" />
              <a className="nav-link" href="#benefits">
                Beneficios
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={DownloadIcon} alt="" />
              <a className="nav-link" href="#download">
                Descargas
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={MembershipIcon} alt="" />
              <a className="nav-link" href="#membership">
                Membresías
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={TestimonyIcon} alt="" />
              <a className="nav-link" href="#testimonial">
                Testimonios
              </a>
            </div>
            <div className="links">
              <img className="link_icon" src={ContactIcon} alt="" />
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className={`navMenuMobile ${menuOpen ? "" : "closeMenu"}`}>
        <img
          className="icon-close"
          src={IconClose}
          alt=""
          onClick={handleClick}
        />
        <div>
          <img className="logo-hamburger" src={Logo} alt="" />
        </div>
        <div className="links-content">
          <div className="links">
            <img className="link_icon" src={BenefitIcon} alt="" />
            <a className="nav-link" onClick={handleClick} href="#benefits">
              Beneficios
            </a>
          </div>
          <div className="links">
            <img className="link_icon" src={DownloadIcon} alt="" />
            <a className="nav-link" onClick={handleClick} href="#download">
              Descargas
            </a>
          </div>
          <div className="links">
            <img className="link_icon" src={MembershipIcon} alt="" />
            <a className="nav-link" onClick={handleClick} href="#membership">
              Membresías
            </a>
          </div>
          <div className="links">
            <img className="link_icon" src={TestimonyIcon} alt="" />
            <a className="nav-link" onClick={handleClick} href="#testimonial">
              Testimonios
            </a>
          </div>
          <div className="links">
            <img className="link_icon" src={ContactIcon} alt="" />
            <a className="nav-link" onClick={handleClick} href="#contact">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
