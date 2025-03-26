import React from "react";
import { useState, useEffect } from "react";
import './Slider.css'
import { Link } from "react-router-dom";

function Slider() {
  const images = [
    "assets/images/slider1.jpg",
    "assets/images/slider2.jpg",
    "assets/images/slider3.jpg",
    "assets/images/slider4.jpg",
    "assets/images/slider5.jpg",
    "assets/images/slider6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % images.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [nextIndex]);
  return (
    <div
      className="flux-transition"
      style={{
        overflow: "visible",
        perspective: "1600px",
        zIndex: 3,
        width: "1519.2px",
        height: "284.85px",
      }}
    >
      <div
        className="slider-container"
        style={{
          position: "relative",
          width: "760px",
          height: "284.85px",
        }}
      >
        <div
          className="flux-image"
          style={{
            width: "760px",
            height: "284.85px",
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "1519.2px 296.719px",
            backgroundPosition: "0px -5.93437px",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            transition: "transform 1200ms ease-out",
          }}
        />
        <div
          style={{
            width: "760px",
            height: "284.85px",
            position: "absolute",
            top: "0px",
            left: "760px",
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            transition: "transform 1200ms ease-out",
            transform: "rotateY(-180deg)",
          }}
        >
          <div
            className="flux-image"
            style={{
              width: "760px",
              height: "284.85px",
              backgroundImage: `url(${images[nextIndex]})`,
              backgroundSize: "1519.2px 296.719px",
              backgroundPosition: "-760px -5.93437px",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
              position: "absolute",
              transform: "rotateX(0deg) rotateY(0deg) translate3d(0%, 0%, 0px)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
