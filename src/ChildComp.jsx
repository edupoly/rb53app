import React from "react";

function ChildComp() {
  console.log("Child Comp Rendered");
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>ChildComp</h1>
    </div>
  );
}

export default React.memo(ChildComp);
