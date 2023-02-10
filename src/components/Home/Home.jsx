import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div>
          <div>
            <h1>
              La herramienta que <br /> te facilita la vida y <br /> te ayuda a
              crecer.
            </h1>
            <p>
              ¿Qué esperas para iniciar <br /> tu primer mes gratis?
            </p>
          </div>
          <div>
            <a href="">Descarga android</a>
            <a href="">Descarga ios</a>
          </div>
        </div>
        <div>
          <div className="imgcelular"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
