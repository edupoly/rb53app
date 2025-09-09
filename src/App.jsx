import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>Master Branch</h1>
      <Products></Products>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
// component
