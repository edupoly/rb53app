import React, { useCallback } from "react";
import ChildComp from "./ChildComp";

function App() {
  var [myname, setMyname] = React.useState("");
  var k = React.useMemo(() => {
    return [33, 44];
  }, []);
  var o = React.useMemo(() => {
    return { country: "india" };
  }, []);
  var greeting = useCallback(function () {
    alert("ela unnaru");
  }, []);
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>App Component</h1>
      <input
        type="text"
        onChange={(e) => {
          setMyname(e.target.value);
        }}
      />
      <h1>My Name is::{myname}</h1>
      <ChildComp x={2} y={"vani"} z={k} w={o} t={greeting}></ChildComp>
    </div>
  );
}

export default App;
// component
