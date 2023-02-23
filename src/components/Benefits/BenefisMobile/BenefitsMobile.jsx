import React from "react";
import FeatureMobile from "./FeatureMobile/FeatureMobile";
import "../BenefisMobile/BenefitsMobile.css";
import Cheked from "./BenefitsChecked/Cheked";

function BenefitsMobile() {
  return (
    <section className="BenefitsMobile_content">
      <div className="BenefitsMobile">
        <FeatureMobile
          image="illus_better_experience"
          title="Mejora la experiencia de tus clientes"
          subtitle="¿Pierdes clientes por no responder WhatsApp?"
          description="¡No hagas esperar a tu cliente! Tenemos una solución para ti."
        />
        <FeatureMobile
          image="illus_better_experience"
          title="Posiciona tu marca"
          subtitle="¡Conecta tu negocio con el mundo!"
          description="Muestra los servicios que ofreces, fotos de tus trabajos, reseñas, promociones y mucho más."
        />
        <FeatureMobile
          image="illus_increase_sales"
          title="Aumenta tus ventas"
          subtitle="¡Crea promociones irresistibles!"
          description="Te brindamos una cómoda interfaz donde puedes crear todo tipo de promos para atraer y fidelizar a tu clientela."
        />
        <FeatureMobile
          image="illus_gains_recognition"
          title="Gana reconocimiento"
          subtitle="Crea confianza y mejora tu reputación"
          description="Acumula seguidores y reseñas positivas de tus clientes."
        />
        <FeatureMobile
          image="illus_teamwork"
          title="Tu equipo de trabajo en un solo lugar"
          subtitle="¡Ten el control!"
          description="Sincroniza tu agenda y la de tu equipo de profesionales en tiempo real."
        />
      </div>
      <div>
        <div className="benefitsChecked_content">
          <div className="benefits_checked">
            <h5 className="title_checked">Beneficios Beunik PRO</h5>
            <Cheked benefits="Ahorras tiempo" />
            <Cheked benefits="Sé más productivo con menos esfuerzo" />
            <Cheked benefits="Posiciona tu marca" />
            <Cheked benefits="Crea confiabilidad" />
            <Cheked benefits="Atrae personas cerca de ti" />
            <Cheked benefits="Crece como profesional y más..." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsMobile;
