import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>Master Branch</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
// component
