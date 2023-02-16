import React from "react";
import Testimonies from "./Testimonies/Testimonies";
import "../Testimonial/Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial">
      <h5 className="title-testimonial">Conoce la experiencia del gremio</h5>
      <div className="testimonies-content">
        <Testimonies />
        <Testimonies />
        <Testimonies />
      </div>
    </section>
  );
}

export default Testimonial;
