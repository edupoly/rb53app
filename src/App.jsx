import { TodoContext, TodoProvider } from "./TodoContext";
import Todolist from "./Todolist";
function App() {
  return (
    // <MyContext.Provider value={{ myname: "praveen", age: 42 }}>
    //   <div className="border border-2 border-success m-2 p-2">
    //     <h1>Master Branch</h1>
    //     <Parent></Parent>
    //   </div>
    // </MyContext.Provider>
    <div className="border border-2 border-success m-2 p-2">
      <TodoProvider>
        <Todolist></Todolist>
      </TodoProvider>
    </div>
  );
}

export default App;
// component
