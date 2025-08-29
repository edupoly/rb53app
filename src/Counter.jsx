import { useState } from "react";

function Counter({ a, s, p }) {
  var [count, setCountFn] = useState(a);

  function incCount() {
    setCountFn(count + s);
  }
  function decCount() {
    setCountFn(count - s);
  }
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
