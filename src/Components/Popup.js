import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import workout from "./workout";
import workoutplan from "./workoutplan";

export const Popup = ({
  name,
  togglePopUp,
  setWorkOutPlan,
  setIndividual,
  setWorkout,
}) => {
  const [frequency, setFrequency] = useState(0);
  const [cycle, setCycle] = useState(0);

  return (
    <div className="pop-up">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{name}</h1>
        <IconButton
          onClick={() => {
            togglePopUp(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <h2>횟수: </h2>
      <input
        type="text"
        required
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      />
      <p style={{ color: "white" }}> .</p>
      <h2>사이클: </h2>
      <input
        type="text"
        required
        value={cycle}
        onChange={(e) => setCycle(e.target.value)}
      />
      <p></p>
      <IconButton
        style={{ float: "right" }}
        onClick={() => {
          if (frequency === 0 || cycle === 0) {
            alert("값을 입력해주세요.");
          } else {
            setWorkOutPlan(
              new workoutplan("개별운동", [new workout(name, frequency, cycle)])
            );
            togglePopUp(false);
            setIndividual(false);
            setWorkout(true);
          }
        }}
      >
        <PlayArrowIcon />
      </IconButton>
    </div>
  );
};
