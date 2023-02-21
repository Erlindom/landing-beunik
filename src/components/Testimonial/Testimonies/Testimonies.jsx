import React from "react";
import "../Testimonies/Testimonies.css";
import iconStarYellow from "../../Images/icon_StartYellow.svg";

function Testimonies() {
  return (
    <>
      <div className="testimonie">
        <div className="avatar-content">
          <img
            className="icon-avatar"
            src={require("../../Images/avatar.png")}
            alt=""
          />
          <p className="avatar-name">Juan Carlos Mejía</p>
          <div className="starYellow-content">
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
          </div>
        </div>
        <div>
          <p className="text-testimonie">
            "Excelente app para el gremio de las barberías. Facilita el
            agendamiento de citas y adicionalmente permite mejor control
            administrativo."
          </p>
        </div>
      </div>
    </>
  );
}

export default Testimonies;
