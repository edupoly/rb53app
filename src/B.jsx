import React from "react";

var B = function (props) {
  console.log("props::", props);

  function checkEnter(ev) {
    if (ev.key === "Enter") {
      props.ref[1].current.focus();
    }
  }
  return (
    <div className="border border-2 border-primary m-2 p-2">
      <h1>B</h1>
      <input
        type="text"
        onKeyUp={(e) => {
          checkEnter(e);
        }}
        placeholder="Enter your address"
        ref={props.ref[0]}
      />
    </div>
  );
};

export default B;
