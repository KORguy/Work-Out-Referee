import React, { useEffect, useRef } from "react";

export const Transition = ({ duration, setTransition }) => {
  var count = duration;
  const cntRef = useRef(count);
  let cntContainer;

  useEffect(() => {
    cntContainer = document.getElementById("cnt");
    const temp = () => {
      cntRef.current -= 1;
      cntContainer.innerHTML = cntRef.current;
      setTimeout(() => {
        temp();
      }, 1000);
      if (cntRef.current === 0) {
        setTransition(false);
      }
    };
    temp();
  });

  return (
    <div className="loading">
      <h1 id="cnt"></h1>
    </div>
  );
};
