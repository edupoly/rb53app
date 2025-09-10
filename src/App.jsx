import { Link, Outlet } from "react-router-dom";
import Todos from "./features/todos/Todos";

function App() {
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>Master Branch</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/todos">AllTodo</Link>&nbsp;&nbsp;
      <Link to="/addtodo">AddTodo</Link>&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
// component
