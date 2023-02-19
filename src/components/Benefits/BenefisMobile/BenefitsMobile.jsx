import React from "react";
import FeatureMobile from "./FeatureMobile/FeatureMobile";
import "../BenefisMobile/BenefitsMobile.css";
import Cheked from "./BenefitsChecked/Cheked";

function BenefitsMobile() {
  return (
    <section className="BenefitsMobile_content">
      <div className="BenefitsMobile">
        <FeatureMobile
          title="Mejora la experiencia de tus clientes"
          subtitle="¿Se enojan tus clientes por que no respondes WhatsApp?'"
          description="¡No hagas esperar a tu cliente! Tenemos una solución para ti."
        />
        <FeatureMobile
          title="Fácil para ti, fácil para tu cliente."
          subtitle="¿Te gustaría estar disponible 24/7 para tu clientela?"
          description="Nuestra App le brinda una cómoda y sencilla interfaz, para que puedan hacer sus reservas 24/7."
        />
        <FeatureMobile
          title="Tu equipo de trabajo en un solo lugar"
          subtitle="¡Ten el control!"
          description="Sincroniza tu agenda y la de tu equipo de profesionales en tiempo real."
        />
        <FeatureMobile
          title="Ya no más cutas perdidas por olvidos"
          subtitle="Nuestra app cuenta además con un doble recordatorio"
          description="para que ningún cliente se olvide de su cita."
        />
        <FeatureMobile
          title="Posiciona tu marca"
          subtitle="¡Conecta tu negocio con el mundo!"
          description="Muestra los servicios que ofreces, fotos de tus trabajos, reseñas, promociones y mucho más."
        />
        <FeatureMobile
          title="Gana reconocimiento"
          subtitle="Crea confianza y mejora tu reputación"
          description="Acumula seguidores y reseñas positivas de tus clientes."
        />
        <FeatureMobile
          title="Aumenta tus ventas"
          subtitle="¡Crea promociones irresistibles!"
          description="Te brindamos una cómoda interfaz donde puedes crear todo tipo de promos para atraer y fidelizar tu clientela."
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
