import React, { memo } from "react";
import { Link } from "react-router-dom";

function Main() {
  const carouselImages = [
    "/assets/images/1728783601.jpg",
    "/assets/images/1736826134.jpg",
    "/assets/images/1736826160.jpg",
    "/assets/images/1736826185.jpg",
    "/assets/images/1736826207.jpg",
    "/assets/images/1736826229.jpg",
    "/assets/images/1736826259.jpg",
    "/assets/images/1736826279.jpg",
  ];

  return (
    <section className="home animate">
      <div
        id="carouselMainIndicators"
        className="carousel slide pointer-event"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselImages.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <Link to="/login">
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  onError={(e) =>
                    (e.target.src = "/assets/images/default-image.jpg")
                  }
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMainIndicators"
          data-bs-slide="prev"
          aria-label="Previous slide"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMainIndicators"
          data-bs-slide="next"
          aria-label="Next slide"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default memo(Main);
