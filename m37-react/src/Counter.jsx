import { useState } from "react";

export default function Counter() {
  const [counter, setCounter]= useState(0);

  const styleCounter = {
    border: "2px solid teal",
    padding : "10px",
  };

  const stepUpCounter = () => {
    setCounter(counter + 1);
  }

  const stepDownCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div style={styleCounter}>
      <h2>Counter: {counter}</h2>
      <button onClick={stepUpCounter}>Step Up</button>
      <button onClick={stepDownCounter}>Step Down</button>
    </div>
  );
}
