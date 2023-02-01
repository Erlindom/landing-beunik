import React from "react";
import { useState, useEffect } from "react";
import "./Nav.css";
import Logo from "../Images/BeunikPRO.png";
import IconHamburger from "../Images/icon-hamburger.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    return () => {};
  }, []);

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
            <div>
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Beneficios
              </a>
            </div>
            <div>
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Descargas
              </a>
            </div>
            <div>
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Membresías
              </a>
            </div>
            <div>
              <a
                className={`nav-link ${menuOpen ? "open" : "closed"}`}
                onClick={handleClick}
                href="/#"
              >
                Testimonios
              </a>
            </div>
            <div>
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
