import React from "react";
import "../styles/Button.css";

export const Button = ({ color, text }) => {
  return (
    <div className="button-container">
      <button className="btn" type="button">
        {text}
      </button>
    </div>
  );
};
