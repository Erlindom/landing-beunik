import React from "react";

function Features(props) {
  return (
    <>
      <div className="feature">
        <div className="gris"></div>
        {props.children}
      </div>
    </>
  );
}

export default Features;
