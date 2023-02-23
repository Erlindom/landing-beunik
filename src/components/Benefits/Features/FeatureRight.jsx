import React from "react";

function FeaturesRight(props) {
  return (
    <>
      <div className="feature">
        {props.children}
        <div className="featureImg_content">
          <img
            className="feature_img"
            src={require(`../../Images/${props.image}.png`)}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default FeaturesRight;
