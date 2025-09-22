import { Outlet, Link, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import { useEffect } from "react";

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    //i will check user is logged in or not?
    if (window.localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  function logout() {
    window.localStorage.clear();
    navigate("/login");
  }
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
          <li>
            <button
              onClick={() => {
                logout();
              }}
              className="btn btn-danger btn-sm"
            >
              Logout
            </button>
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
