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
          <p>Juan Carlos Mejía</p>
          <div>
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
          </div>
        </div>
        <div>
          <p className="text-testimonie">
            "Excelente app para el gremio de las <br /> barberías. Facilita el
            agendamiento de citas <br /> y adicionalmente permite mejor control
            <br /> administrativo."
          </p>
        </div>
      </div>
    </>
  );
}

export default Testimonies;
