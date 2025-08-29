import { useState, useEffect } from "react";

function Counter({ a, s, p }) {
  console.log("Counter Rendered");
  var [count, setCountFn] = useState(a);

  function incCount() {
    setCountFn(count + s);
  }
  function decCount() {
    setCountFn(count - s);
  }

  useEffect(() => {
    console.log("Counter Mounted");
  }, []);

  useEffect(() => {
    console.log("Counter Updated");
  });

  return (
    <div className="border border-2 border-success p-2 m-2">
      <h1>Counter::{count}</h1>
      <button
        onClick={() => {
          incCount();
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          decCount();
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
          p(count);
        }}
      >
        Mee parents ki call chestha
      </button>
    </div>
  );
}
export default Counter;
