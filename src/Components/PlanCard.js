import React, { useEffect } from "react";
import "../App.css";

export const PlanCard = ({ id, image, plan }) => {
  useEffect(() => {
    for (var i = plan.list.length - 1; i >= 0; i--) {
      var temp =
        "<p>" +
        plan.list[i].name +
        " " +
        plan.list[i].frequency +
        " x " +
        plan.list[i].cycle +
        "</p>";
      document.getElementById(id).insertAdjacentHTML("afterend", temp);
    }
  }, []);

  return (
    <div
      className="plan-card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="card-content">
        <h1>{plan.name}</h1>
        <div className="plan-content">
          <p id={id}>plans:</p>
        </div>
      </div>
    </div>
  );
};
