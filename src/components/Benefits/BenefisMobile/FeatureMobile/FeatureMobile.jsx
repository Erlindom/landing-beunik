import React from "react";
import "../FeatureMobile/FeatureMobile.css";

function FeatureMobile(props) {
  return (
    <>
      <div className="featureMobile">
        <div className="titleTile_content">
          <p className="title_tile">{props.title}</p>
        </div>
        <div>
          <img
            className="mackupFeature"
            src={require("../../../Images/muckupPhone.png")}
            alt=""
          />
        </div>
        <div>
          <p className="subtitle_tile">{props.subtitle}</p>
          <p className="description_tile">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default FeatureMobile;
