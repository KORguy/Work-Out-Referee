import React from "react";
import "../App.css";

export const InitialCard = ({ text, image }) => {
  return (
    <div
      className="initial-card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0, 0.6)" }}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};
