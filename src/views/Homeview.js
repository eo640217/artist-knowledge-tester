import React from "react";
import { Button } from "../components/Button";
import Carousel from "../components/Carousel";
import { SearchBar } from "../components/SearchBar";
import "../styles/HomeView.css";

const Homeview = () => {
  return (
    <div className="home-container">
      <div className="inner-home-container">
        <div className="carousel">
          <Carousel />
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="buttons">
          <Button text="Start" color="Green" />
        </div>
      </div>
    </div>
  );
};

export default Homeview;
