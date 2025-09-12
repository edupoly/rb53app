import { useEffect, useState } from "react";

function Counter() {
  var [count, setCountFn] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCountFn((cv) => {
        return cv + 1;
      });
      console.log("setinterval call aindi");
    }, 2000);
  }, []);

  function incCount() {
    for (var i = 1; i <= 4; i++) {
      setCountFn(count + 2);
      setCountFn((cv) => {
        return cv + 1;
      });
    }
  }
  function decCount() {
    setCountFn(count - 1);
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
    </div>
  );
}
export default Counter;
