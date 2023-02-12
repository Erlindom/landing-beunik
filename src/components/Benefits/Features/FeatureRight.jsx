import React from "react";

function Features(props) {
  return (
    <>
      <div className="feature">
        {props.children}
        <div className="gris"></div>
      </div>
    </>
  );
}

export default Features;
