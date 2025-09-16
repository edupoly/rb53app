import React from "react";

var C = function (props) {
  return (
    <div className="border border-2 border-info m-2 p-2">
      <h1>C</h1>
      <input type="text" ref={props.ref} />
    </div>
  );
};

export default C;
