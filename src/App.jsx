import Navbar from "./Navbar";
import TodoProvider from "./todolist/TodoContext";
import Todolist from "./todolist/Todolist";

function App() {
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>Master Branch</h1>
      <TodoProvider>
        <Navbar></Navbar>
        <Todolist></Todolist>
      </TodoProvider>
    </div>
  );
}

export default App;
// component
