import React from "react";

export const Individual = ({ name, image }) => {
  return (
    <div
      className="individual-card"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          width: "200px",
          height: "200px",
        }}
      >
        <h1>{name}</h1>
      </div>
    </div>
  );
};
