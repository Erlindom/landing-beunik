import React from "react";
import "../Testimonies/Testimonies.css";
import iconStarYellow from "../../Images/icon_StartYellow.svg";

function Testimonies(props) {
  return (
    <>
      <div className="testimonie">
        <div className="avatar-content">
          <img
            className="icon-avatar"
            src={require(`../../Images/${props.image}.jpeg`)}
            alt=""
          />
          <p className="avatar-name">{props.name}</p>
          <div className="starYellow-content">
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
            <img className="starYellow" src={iconStarYellow} alt="" />
          </div>
        </div>
        <div>
          <p className="text-testimonie">{`"${props.testimonial}".`}</p>
        </div>
      </div>
    </>
  );
}

export default Testimonies;
