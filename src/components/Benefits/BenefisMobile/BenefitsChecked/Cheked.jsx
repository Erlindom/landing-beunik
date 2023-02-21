import React from "react";
import "../BenefitsChecked/Cheked.css";
import iconCheck from "../../../Images/icon_checklist.svg";

function Cheked(props) {
  return (
    <>
      <div className="checked_content">
        <img className="icon_check" src={iconCheck} alt="" />
        <p className="textChecked">{props.benefits}</p>
      </div>
    </>
  );
}

export default Cheked;
