import React from "react";
import Testimonies from "./Testimonies/Testimonies";
import "../Testimonial/Testimonial.css";
import Carousel from "./Carousel/Carousel";

const testimonies = [
  {
    id: 1,
    name: "Big Boss",
    img: "Bigboss",
    desc: "Mis clientes lo agradecen, porque a veces no tengo tiempo para responderles al WhatsApp y ya pueden apartar su turno sin necesidad de esperar mi respuesta",
  },
  {
    id: 2,
    name: "Círculo Rojo",
    img: "CirculoRojo",
    desc: "Hace que mi negocio se vea más profesional",
  },
  {
    id: 3,
    name: "Violetta Spa",
    img: "ViolettaSpa",
    desc: "Me gusta mucho como puedo administrar mi agenda, y también la plataforma se ha preocupado por añadir funciones que son relevantes para nosotros como dueños de negocio",
  },
  {
    id: 4,
    name: "Juan Villa",
    img: "JuanVilla",
    desc: "Estoy sorprendido del orden que ha generado en mi negocio, realmente agradezco mucho a la empresa por esta herramienta que nos dieron al gremio",
  },
  {
    id: 5,
    name: "YeeSeer",
    img: "YeeSeer",
    desc: "Me ahorra tiempo, desde el día jueves ya tengo el fin de semana totalmente agendado",
  },
  {
    id: 6,
    name: "Y&M STUDIO",
    img: "Y&M_Studio",
    desc: "Definitivamente, la tecnología es el camino, tenemos una fundación en Bello y sabemos lo importante que es educar a las personas en esta nueva era digital",
  },
  {
    id: 7,
    name: "Hipton",
    img: "Hipton",
    desc: "Tenía temor de empezar porque no soy muy bueno con la tecnología, pero mi clientela fue muy receptiva y el manejo de la App muy sencillo",
  },
  {
    id: 8,
    name: "Erika Nails Spa",
    img: "ErikaNailSpa",
    desc: "Una herramienta muy completa que me brinda facilidad para manejar la liquidación de mi equipo de trabajo y el control de mis citas",
  },
];

function Testimonial() {
  return (
    <section className="testimonial_content" id="testimonial">
      <div className="testimonial">
        <h5 className="title-testimonial">Conoce la experiencia del gremio</h5>
        <div className="testimonial_carousel">
          <Carousel testimonie={testimonies} />
        </div>
        <div className="testimonies-content testimonieNormal">
          <Testimonies
            image="Bigboss"
            name="Big boss"
            testimonial="Mis clientes lo agradecen, porque a veces no tengo tiempo para responderles al WhatsApp y ya pueden apartar su turno sin necesidad de esperar mi respuesta"
          />
          <Testimonies
            image="CirculoRojo"
            name="Círculo rojo"
            testimonial="Hace que mi negocio se vea más profesional"
          />
          <Testimonies
            image="ViolettaSpa"
            name="Violetta spa"
            testimonial="Me gusta mucho como puedo administrar mi agenda, y también la plataforma se ha preocupado por añadir funciones que son relevantes para nosotros como dueños de negocio"
          />
          <Testimonies
            image="JuanVilla"
            name="Juan villa"
            testimonial="Estoy sorprendido del orden que ha generado en mi negocio, realmente agradezco mucho a la empresa por esta herramienta que nos dieron al gremio"
          />
          <Testimonies
            image="YeeSeer"
            name="Yeeseer"
            testimonial="Me ahorra tiempo, desde el día jueves ya tengo el fin de semana totalmente agendado"
          />
          <Testimonies
            image="Y&M_Studio"
            name="Y&M STUDIO"
            testimonial="Definitivamente, la tecnología es el camino, tenemos una fundación en Bello y sabemos lo importante que es educar a las personas en esta nueva era digital"
          />
          <Testimonies
            image="Hipton"
            name="Hipton"
            testimonial="Tenía temor de empezar porque no soy muy bueno con la tecnología, pero mi clientela fue muy receptiva y el manejo de la App muy sencillo"
          />
          <Testimonies
            image="ErikaNailSpa"
            name="Erika nails spa"
            testimonial="Una herramienta muy completa que me brinda facilidad para manejar la liquidación de mi equipo de trabajo y el control de mis citas"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
