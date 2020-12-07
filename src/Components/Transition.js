import React, { useEffect, useState } from "react";

export const Transition = ({ duration, setTransition }) => {
  const [count, setCount] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  });

  useEffect(() => {
    if (count === 0) {
      setTransition(false);
    }
  }, [count]);

  return (
    <div className="loading">
      <h1>{count}</h1>
    </div>
  );
};
