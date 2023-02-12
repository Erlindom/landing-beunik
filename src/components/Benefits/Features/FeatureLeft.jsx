import React from "react";

function Features(props) {
  return (
    <>
      <div className="benefits-conetnt">
        <div className="gris"></div>
        {props.children}
      </div>
    </>
  );
}

export default Features;
