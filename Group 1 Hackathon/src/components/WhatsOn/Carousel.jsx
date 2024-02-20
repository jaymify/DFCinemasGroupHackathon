// Carousel.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <img
            src="https://i.redd.it/8yonn7m4bfk31.jpg"
            className="d-block w-100"
            alt="Endgame"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <img
            src="https://goldendiscs.ie/cdn/shop/collections/Header_Oppenheimer_2for25_460x@2x.png?v=1697618018"
            className="d-block w-100"
            alt="Oppenheimer"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <img
            src="https://uproxx.com/wp-content/uploads/2023/06/barbie-2.jpg?w=1600&h=660&crop=1"
            className="d-block w-100"
            alt="Barbie"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
        onClick={() => handleSlide((activeIndex - 1 + 3) % 3)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
        onClick={() => handleSlide((activeIndex + 1) % 3)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
