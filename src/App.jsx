import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>Master Branch</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
// component
