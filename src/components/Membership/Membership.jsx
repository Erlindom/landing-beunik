import React from "react";
import Plan from "../Membership/Plan/Plan";
import PlanMobile from "./Plan/PlanMobile";
import IconStar from "../Images/icon_BlueStar.svg";
import IconStarWhite from "../Images/icon_WhiteStar.svg";
import IlusPlanPro from "../Images/illus_PlanPRO.svg";
import IlusPlanTeam from "../Images/illus_PlanTeam.svg";
import IlusPlanTeamPro from "../Images/illus_PlanTeamPRO.svg";
import "../Membership/Membership.css";

function Membership() {
  return (
    <section id="membership">
      <h5 className="title_membership">Planes diseñados a tu medida</h5>
      <div className="memberships">
        <Plan
          planImage={IlusPlanPro}
          planTitle="plan"
          PlanTextColor="planTitleBlue"
          colorLine="darkBlueLine"
          planType="Plan PRO"
          planDescriptionOne="Plan para un profesional"
          planDescriptionTwo="independiente"
          planPrice="$29.900"
        >
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Accede a 1 agenda</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">
              Recordatorio automático de <br /> citas a tus clientes
            </p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Sube fotos de tus trabajos</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">
              Crea ofertas para atraer más <br /> clientes
            </p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">
              Acumula reseñas y gana <br /> reputación
            </p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">
              Accede a bases de datos y <br /> estadísticas de clientes
            </p>
          </div>
        </Plan>
        <Plan
          planImage={IlusPlanTeam}
          planTitle="planTwo"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team"
          planDescriptionOne="Plan para un negocio"
          planPrice="$59.900"
          colorPrice="colorPriceWhite"
        >
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Accede a agendas ilimtiadas
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Vincula a tu equipo de trabajo
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Recordatorio automático de <br /> citas a tus clientes
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Sube fotos de tus trabajos
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Crea ofertas para atraer a más <br /> clientes
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Acumula reseñas y gana <br /> reputación
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Accede a bases de datos y <br /> estadísticas de clientes
            </p>
          </div>
        </Plan>
        <Plan
          planImage={IlusPlanTeamPro}
          planTitle="planThree"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team PRO"
          planDescriptionOne="Plan avanzado para negocio"
          planPrice="$79.900"
          colorPrice="colorPriceWhite"
        >
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Accede a agendas ilimitadas
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Vincula a tu equipo de trabajo
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Recordatorio automático de <br /> citas a tus clientes
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Sube fotos de tus trabajos
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Crea ofertas para atraer más <br /> clientes
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Acumula reseñas y gana <br /> reputación
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Accede a bases de datos y <br /> estadísticas de clientes
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Maneja contabilidad para <br /> liquidar a tu equipo de trabajo
            </p>
          </div>
        </Plan>
      </div>
      <div className="membershipsMobile">
        <PlanMobile
          planImage={IlusPlanPro}
          planTitle="plan"
          PlanTextColor="planTitleBlue"
          colorLine="darkBlueLine"
          planType="Plan PRO"
          planDescriptionOne="Plan para un profesional"
          planDescriptionTwo="independiente"
          planPrice="$29.900"
        />
        <PlanMobile
          planImage={IlusPlanTeam}
          planTitle="planTwo"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team"
          planDescriptionOne="Plan para negocio"
          planPrice="$59.900"
          colorPrice="colorPriceWhite"
        />
        <PlanMobile
          planImage={IlusPlanTeamPro}
          planTitle="planThree"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team PRO"
          planDescriptionOne="Plan avanzado para negocio"
          planPrice="$79.900"
          colorPrice="colorPriceWhite"
        >
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Subir fotos de tus trabajos
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Acumular seguidores y<br />
              reseñas
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Agenda automatuzada
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Crear combos y promociones
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Recordatorio de citas
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Vincular profesionales de forma <br /> ilimitada
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Liquidar todos tus servicios
            </p>
          </div>
          <div className="points_content">
            <img src={IconStarWhite} alt="" />
            <p className="membership_features textFeatureWhite">
              Acceder a la base de datos <br /> de clientes con estadísticas
            </p>
          </div>
        </PlanMobile>
      </div>
    </section>
  );
}

export default Membership;
