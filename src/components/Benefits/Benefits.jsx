import React from "react";
import FeaturesLeft from "./Features/FeatureLeft";
import FeaturesRight from "./Features/FeatureRight";
import "./Benefits.css";

function Benefits() {
  return (
    <section className="benefits">
      <FeaturesLeft>
        <div>
          <h3 className="feature-title">
            Mejora la experiencia <br /> de tus clientes
          </h3>
          <h4 className="feature-text">
            ¿Se enojan tus clientes por que <br /> no responder WhatsApp
          </h4>
          <p className="feature-description">
            ¡No hagas esperar a tu cliente! <br /> Tenemos una solución para ti.
          </p>
        </div>
      </FeaturesLeft>
      <FeaturesRight>
        <div>
          <h3 className="feature-title">
            Fácil para ti, fácil <br /> para tu cliente
          </h3>
          <h4 className="feature-text">
            ¿Te gustaría estar disponible <br /> 24/7 para tu clientela?
          </h4>
          <p className="feature-description">
            Nuestra App le brinda una cómoda <br /> y sencilla interfaz, para
            que puedan <br /> hacer sus reservas las 24/7.
          </p>
        </div>
      </FeaturesRight>
      <FeaturesLeft>
        <div>
          <h3 className="feature-title">
            Tu equipo de trabajo <br /> en un solo lugar
          </h3>
          <h4 className="feature-text">¡Ten el control!</h4>
          <p className="feature-description">
            Sincroniza tu agenda y la de tu <br /> equipo de profesionales en{" "}
            <br /> tiempo real.
          </p>
        </div>
      </FeaturesLeft>
      <FeaturesRight>
        <div>
          <h3 className="feature-title">
            Ya no da más citas <br /> perdidas por olvidos
          </h3>
          <h4 className="feature-text">
            Nuestra app cuenta además <br /> con un doble recordatorio.
          </h4>
          <p className="feature-description">
            Para que ningún cliente se olvide <br /> de su cita.
          </p>
        </div>
      </FeaturesRight>
      <FeaturesLeft>
        <div>
          <h3 className="feature-title">Posiciona tu marca</h3>
          <h4 className="feature-text">
            ¡Conecta tu negocio con <br /> el mundo!
          </h4>
          <p className="feature-description">
            Muestra los servicios que ofreces, <br /> fotos de tus trabajos,
            reseñas, <br /> promociones y mucho más.
          </p>
        </div>
      </FeaturesLeft>
      <FeaturesRight>
        <div>
          <h3 className="feature-title">Gana reconocimiento</h3>
          <h4 className="feature-text">
            Crea confianza y mejora tu <br /> reputación.
          </h4>
          <p className="feature-description">
            Acumula seguidores y reseñas <br /> positivas de tus clientes.
          </p>
        </div>
      </FeaturesRight>
      <FeaturesLeft>
        <div>
          <h3 className="feature-title">Aumenta tus ventas</h3>
          <h4 className="feature-text">¡Crea promociones irresistibles!</h4>
          <p className="feature-description">
            Te brindamos una cómoda interfaz <br /> donde puedes crear todo tipo
            de <br /> promos para atraer y fidelizar tu <br /> clientela.
          </p>
        </div>
      </FeaturesLeft>
    </section>
  );
}

export default Benefits;
