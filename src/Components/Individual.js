import React from "react";

export const Individual = ({ name, image }) => {
  // window.fitText(document.getElementById("test"));

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 id="test">{name}</h1>
      </div>
    </div>
  );
};
