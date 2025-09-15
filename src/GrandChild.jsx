import React, { useContext } from "react";
import MuniGrandChild from "./MuniGrandChild";
import { MyContext } from "./MyContext";

function GrandChild() {
  var x = useContext(MyContext);
  console.log(x);
  return (
    <div className="border border-2 border-secodary m-2 p-2">
      <h2>GrandChild:{x?.myname}</h2>
      <MuniGrandChild></MuniGrandChild>
    </div>
  );
}

export default GrandChild;
