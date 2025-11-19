import { Outlet, Link } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
// component
