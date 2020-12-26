// import React, { useEffect, useRef } from "react";

// export const Transition = ({ duration, setTransition }) => {
//   var count = duration;
//   const cntRef = useRef(count);
//   let cntContainer;

//   useEffect(() => {
//     cntContainer = document.getElementById("cnt");
//     const temp = () => {
//       cntRef.current -= 1;
//       cntContainer.innerHTML = cntRef.current;
//       setTimeout(() => {
//         temp();
//       }, 1000);
//       if (cntRef.current === 0) {
//         setTransition(false);
//       }
//     };
//     temp();
//   });

//   return (
//     <div className="loading">
//       <h1 id="cnt"></h1>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";

export const Transition = ({ duration, setTransition }) => {
  const [count, setCount] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
      setTransition(false);
    }
  });
  return (
    <div className="loading">
      <h1>{count}</h1>
    </div>
  );
};
