import React from "react";

function Features(props) {
  return (
    <>
      <div className="benefits-conetnt">
        {props.children}
        <div className="gris"></div>
      </div>
    </>
  );
}

export default Features;
