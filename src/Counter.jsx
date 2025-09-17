import React from "react";
import { useCounter } from "./useCounter";

function Counter({ ic, is, name }) {
  var [count, inc, dec] = useCounter(ic, is, name);

  return (
    <div className="border border-2 border-info m-2 p-2">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
