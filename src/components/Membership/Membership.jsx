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
    <section>
      <h5 className="title_membership">Planes diseñados a tu medida</h5>
      <div className="memberships">
        <Plan
          planImage={IlusPlanPro}
          planTitle="plan"
          PlanTextColor="planTitleBlue"
          colorLine="darkBlueLine"
          planType="Plan PRO"
          planDescriptionOne="Perfecto para estilistas independientes"
          planDescriptionTwo="y/o que trabajan a domicilio."
          planPrice="$39.000"
        >
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Subir fotos de tus trabajos</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">
              Acumular seguidores y<br />
              reseñas
            </p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Agenda automatuzada</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Crear combos y promociones</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Recordatorio de citas</p>
          </div>
        </Plan>
        <Plan
          planImage={IlusPlanTeam}
          planTitle="planTwo"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team"
          planDescriptionOne="Perfecto para administrar"
          planDescriptionTwo="tu equipo de profesionales."
          planPrice="$59.900"
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
              Vincular profesionales de <br /> forma ilimitada
            </p>
          </div>
        </Plan>
        <Plan
          planImage={IlusPlanTeamPro}
          planTitle="planThree"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team PRO"
          planDescriptionOne="Perfecto para convertir tu negocio"
          planDescriptionTwo="en una empresa exitosa."
          planPrice="$119.900"
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
        </Plan>
      </div>
      <div className="membershipsMobile">
        <PlanMobile
          planImage={IlusPlanPro}
          planTitle="plan"
          PlanTextColor="planTitleBlue"
          colorLine="darkBlueLine"
          planType="Plan PRO"
          planDescriptionOne="Perfecto para estilistas independientes"
          planDescriptionTwo="y/o que trabajan a domicilio."
          planPrice="$39.000"
        >
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Subir fotos de tus trabajos</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">
              Acumular seguidores y<br />
              reseñas
            </p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Agenda automatuzada</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Crear combos y promociones</p>
          </div>
          <div className="points_content">
            <img src={IconStar} alt="" />
            <p className="membership_features">Recordatorio de citas</p>
          </div>
        </PlanMobile>
        <PlanMobile
          planImage={IlusPlanTeam}
          planTitle="planTwo"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team"
          planDescriptionOne="Perfecto para administrar tu equipo"
          planDescriptionTwo="de profesionales."
          planPrice="$59.900"
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
              Vincular profesionales de <br /> forma ilimitada
            </p>
          </div>
        </PlanMobile>
        <PlanMobile
          planImage={IlusPlanTeamPro}
          planTitle="planThree"
          PlanTextColor="planTitleWhite"
          colorLine="lightBlueLine"
          planType="Plan Team PRO"
          planDescriptionOne="Perfecto para convertir tu negocio"
          planDescriptionTwo="en una empresa exitosa."
          planPrice="$119.900"
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
