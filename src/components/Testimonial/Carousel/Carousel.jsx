import React from "react";
import { useState, useEffect } from "react";
import iconStarYellow from "../../Images/icon_StartYellow.svg";
import iconLeft from "../../Images/icon_left.svg";
import iconRight from "../../Images/icon_right.svg";
import "../Carousel/Carousel.css";

function Carousel({ testimonie }) {
  const [initialPosition, setInitialPosition] = useState(0);
  const [finalPosition, setFinalPosition] = useState(3);
  const [testimonieToShow, setTestimonieToShow] = useState([]);

  useEffect(() => {
    getTestimonieToShowInitialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTestimonieToShowInitialState = () => {
    const setNewState = testimonie.slice(0, 3);
    setTestimonieToShow(setNewState);
  };

  const handleTestimonieToShowChange = (action) => {
    if (action === "next") {
      if (finalPosition !== testimonie.length) {
        const newInitialPosition = initialPosition + 1;
        const newFinalPosition = finalPosition + 1;
        setInitialPosition(newInitialPosition);
        setFinalPosition(newFinalPosition);
        const newArray = testimonie.slice(newInitialPosition, newFinalPosition);
        setTestimonieToShow(newArray);
      } else {
        setInitialPosition(0);
        setFinalPosition(3);
        getTestimonieToShowInitialState();
      }
    }
    if (action === "prev") {
      if (initialPosition !== 0) {
        const newInitialPosition = initialPosition - 1;
        const newFinalPosition = finalPosition - 1;
        setInitialPosition(newInitialPosition);
        setFinalPosition(newFinalPosition);
        const newArray = testimonie.slice(newInitialPosition, newFinalPosition);
        setTestimonieToShow(newArray);
      } else {
        setInitialPosition(0);
        setFinalPosition(3);
        getTestimonieToShowInitialState();
      }
    }
  };

  return (
    <>
      <div className="carousel-container">
        <div className="testimonies-content">
          <button
            className="arrow-btn"
            onClick={() => handleTestimonieToShowChange("prev")}
          >
            <img
              className="arrow-img"
              src={iconLeft}
              alt="Flecha para mover hacía la izquierda"
            />
          </button>
          {testimonieToShow.map((testimonieShow) => {
            return (
              <div className="testimonie" key={testimonieShow.id}>
                <div className="avatar-content">
                  <img
                    className="icon-avatar"
                    width={50}
                    src={require(`../../Images/${testimonieShow.img}.jpeg`)}
                    alt=""
                  />
                  <p className="avatar-name">{testimonieShow.name}</p>
                  <div className="starYellow-content">
                    <img className="starYellow" src={iconStarYellow} alt="" />
                    <img className="starYellow" src={iconStarYellow} alt="" />
                    <img className="starYellow" src={iconStarYellow} alt="" />
                    <img className="starYellow" src={iconStarYellow} alt="" />
                    <img className="starYellow" src={iconStarYellow} alt="" />
                  </div>
                  <div>
                    <p className="text-testimonie">{`"${testimonieShow.desc}".`}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            className="arrow-btn"
            onClick={() => handleTestimonieToShowChange("next")}
          >
            <img
              className="arrow-img"
              src={iconRight}
              alt="Flecha para mover hacía la derecha"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
