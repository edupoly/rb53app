import { useEffect, useRef } from "react";
import TodoList from "./Todolist";

function App() {
  // var aRef = useRef();
  // var bRef = useRef();

  // function handleClick() {
  //   var x = aRef.current.value;
  //   bRef.current.innerText = x;
  // }
  // useEffect(() => {
  //   aRef.current.focus();
  // }, []);
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>Master Branch</h1>
      <TodoList></TodoList>
      {/* <input type="text" ref={aRef} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Show text
      </button>
      <h3>
        My Name is :: <span ref={bRef}></span>
      </h3> */}
    </div>
  );
}

export default App;
// component
