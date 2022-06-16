import React, { useState } from "react";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import "./Slider.css";

function Slider() {
  console.log(process.env.PUBLIC_URL);

  const [image, setImage] = useState(1);

  function previousSLide() {
    setImage((prevImage) => {
      if (prevImage === 1) {
        return 5;
      }
      return prevImage - 1;
    });
  }

  function nextSlide() {
    setImage((prevImage) => {
      if (prevImage === 5) {
        return 1;
      }
      return prevImage + 1;
    });
  }

  function clickDot(index) {
    setImage(index);
  }

  return (
    <div className="slider">
      <div className="images">
        <img
          className="arrow"
          onClick={previousSLide}
          alt="left arrow"
          src={leftArrow}
        />
        <img
          className="image"
          alt={image}
          src={process.env.PUBLIC_URL + `/images/img${image}.jpg`}
        />
        <img
          className="arrow"
          onClick={nextSlide}
          alt="right arrow"
          src={rightArrow}
        />
      </div>
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => clickDot(index + 1)}
            className={image === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
