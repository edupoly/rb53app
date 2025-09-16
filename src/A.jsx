import React, { useEffect, useRef } from "react";
import B from "./B";
import C from "./C";

function A() {
  const aRef = useRef();
  const bRef = useRef();
  const cRef = useRef();
  useEffect(() => {
    aRef.current.focus();
  }, []);
  function checkEnter(ev) {
    if (ev.key === "Enter") {
      bRef.current.focus();
    }
  }
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>A</h1>
      <input
        type="text"
        placeholder="Enter your name"
        ref={aRef}
        onKeyUp={(e) => {
          checkEnter(e);
        }}
      />
      <B x={100} ref={[bRef, cRef]}></B>
      <C ref={cRef}></C>
    </div>
  );
}

export default A;
