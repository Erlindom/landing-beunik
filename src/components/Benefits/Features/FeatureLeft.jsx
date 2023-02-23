import React from "react";

function FeaturesLeft(props) {
  return (
    <>
      <div className="feature">
        <div className="gris">
          <img src={require(`../../Images/${props.image}.png`)} alt="" />
        </div>
        {props.children}
      </div>
    </>
  );
}

export default FeaturesLeft;
