import React from "react";
import "../BenefitsChecked/Cheked.css";

function Cheked(props) {
  return (
    <>
      <div className="checked_content">
        <img
          className="icon_check"
          src={require("../../../Images/checked.png")}
          alt=""
        />
        <p className="textChecked">{props.benefits}</p>
      </div>
    </>
  );
}

export default Cheked;
