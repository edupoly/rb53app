import Counter from "./Counter";

function App() {
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>Master Branch</h1>
      <Counter ic={10} is={5} name="chirucounter"></Counter>
      <Counter ic={49} is={4} name="pawancounter"></Counter>
    </div>
  );
}

export default App;
// component
