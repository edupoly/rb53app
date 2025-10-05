import { useEffect, useRef } from "react";

import Address from "./Address";

function App() {
  var aRef = useRef();
  var bRef = useRef();
  useEffect(() => {
    aRef.current.focus();
  }, []);
  function checkEnter(ev) {
    if (ev.key === "Enter") {
      bRef.current.focus();
    }
  }
  return (
    <div className="border border-2 border-success m-2 p-2">
      <input
        type="text"
        ref={aRef}
        onKeyUp={(e) => {
          checkEnter(e);
        }}
      />
      <Address ref={bRef}></Address>
    </div>
  );
}

export default App;
// component
