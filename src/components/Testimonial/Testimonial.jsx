import React from "react";
import Testimonies from "./Testimonies/Testimonies";
import "../Testimonial/Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial_content" id="testimonial">
      <div className="testimonial">
        <h5 className="title-testimonial">Conoce la experiencia del gremio</h5>
        <div className="testimonies-content">
          <Testimonies
            image="Bigboss"
            name="Big boss"
            testimonial="Mis clientes lo agradecen, porque a veces no tengo tiempo para responderles al WhatsApp y ya pueden apartar su turno sin necesidad de esperar mi respuesta."
          />
          <Testimonies
            image="CirculoRojo"
            name="Círculo rojo"
            testimonial="Hace que mi negocio se vea más profesional."
          />
          <Testimonies
            image="ViolettaSpa"
            name="Violetta spa"
            testimonial="Me gusta mucho como puedo administrar mi agenda, y también la plataforma se ha preocupado por añadir funciones que son relevantes para nosotros como dueños de negocio."
          />
          <Testimonies
            image="JuanVilla"
            name="Juan villa"
            testimonial="Estoy sorprendido del orden que ha generado en mi negocio, realmente agradezco mucho a la empresa por esta herramienta que nos dieron al gremio."
          />
          <Testimonies
            image="YeeSeer"
            name="Yeeseer"
            testimonial="Me ahorra tiempo, desde el día jueves ya tengo el fin de semana totalmente agendado."
          />
          <Testimonies
            image="Bigboss"
            name="Y&M STUDIO"
            testimonial="Definitivamente, la tecnología es el camino, tenemos una fundación en Bello y sabemos lo importante que es educar a las personas en esta nueva era digital."
          />
          <Testimonies
            image="Bigboss"
            name="Hipton"
            testimonial="Tenía temor de empezar porque no soy muy bueno con la tecnología, pero mi clientela fue muy receptiva y el manejo de la App muy sencillo."
          />
          <Testimonies
            image="ErikaNailSpa"
            name="Erika nails spa"
            testimonial="Una herramienta muy completa que me brinda facilidad para manejar la liquidación de mi equipo de trabajo y el control de mis citas."
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
