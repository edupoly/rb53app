import { Outlet, Link } from "react-router-dom";
import Categories from "./Categories";

function App() {
  return (
    <div>
      <div id="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">Learn More Aboutus</Link>
          </li>
          <li>
            <Link to="/courses">Technologies</Link>
          </li>
        </ul>
      </div>
      <Categories></Categories>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
// component
