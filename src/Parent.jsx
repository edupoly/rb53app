import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="border border-2 border-danger m-2 p-2">
      Parent
      <Child></Child>
    </div>
  );
}

export default Parent;
