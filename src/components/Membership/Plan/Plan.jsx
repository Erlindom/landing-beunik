import React from "react";
import "../Plan/Plan.css";

function Plan(props) {
  return (
    <>
      <div className={`${props.planTitle}`}>
        <div className="image_plan">
          <img className="planImage" src={props.planImage} alt="" />
          <div>
            <h4 className={`title_plan ${props.PlanTextColor}`}>
              {props.planType}
            </h4>
            <p className={`plan-text ${props.PlanTextColor}`}>
              {props.planDescriptionOne} <br /> {props.planDescriptionTwo}
            </p>
          </div>
        </div>
        <div className={props.colorLine}></div>
        <div className="plan_caracter">{props.children}</div>
        <div className="lastPart_price">
          <div className={props.colorLine}></div>
          <div className="price-content">
            <p className={`price ${props.colorPrice}`}>
              {props.planPrice}
              <span className="cop">COP</span>
              <span className="monthly">/mensual</span>
            </p>
            <a
              className="getPlan_btn"
              href="https://wa.link/b87xc8"
              target="_blank"
              rel="noreferrer"
            >
              Adquirir plan
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
