import { useEffect } from "react";
import Counter from "./Counter";

function App() {
  console.log("App Component Rendered");
  useEffect(() => {
    console.log("App Component Mounted");
  }, []);
  useEffect(() => {
    console.log("App Component Updated");
  });
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>App Component</h1>
      <Counter a={10} s={20}></Counter>
      <Counter a={30} s={50}></Counter>
    </div>
  );
}

export default App;
// component
