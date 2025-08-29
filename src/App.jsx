import Counter from "./Counter";
import { products } from "./products.json";
function App() {
  console.log(products);
  function abc(c) {
    alert(c);
  }
  return (
    <div className="border border-3 border-info p-2 m-2">
      <h1>Master Branch</h1>
      <Counter a={200} s={5} p={abc}></Counter>
      <Counter a={100} s={100} p={abc}></Counter>
    </div>
  );
}

export default App;
// component
