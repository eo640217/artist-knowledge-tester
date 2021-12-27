import React from "react";
import "../styles/Carousel.css";
const Carousel = () => {
  return (
    <div className="carousel-container">
      <img src="https://picsum.photos/200/300?t=1" alt="" className="pic" />
      <img src="https://picsum.photos/200/300?t=2" alt="" className="pic" />
      <img src="https://picsum.photos/200/300?t=3" alt="" className="pic" />
      <img src="https://picsum.photos/200/300?t=4" alt="" className="pic" />
      <img src="https://picsum.photos/200/300?t=5" alt="" className="pic" />
    </div>
  );
};

export default Carousel;
