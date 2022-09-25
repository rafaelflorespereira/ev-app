import React, { useState } from "react";
const Counter = () => {
  let [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter++);
  };
  return (
    <div>
      <h1>EV's: {counter}</h1>
      <button onClick={addCounter}>+</button>
    </div>
  );
};

export default Counter;
