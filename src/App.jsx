import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "./userSlice";

function App() {
  let { user } = useSelector((state) => state.userR);
  let dispatch = useDispatch();
  var navigate = useNavigate();
  useEffect(() => {
    if (user.username) {
      navigate("/todolist");
    }
  }, [user]);
  console.log("App::", user);
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h1>What is Component</h1>

      {user.username && (
        <>
          <b>Welcome! {user.username}</b>
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </button>
        </>
      )}
      {!user.username && (
        <>
          <Link to="/login">Login</Link>&nbsp;&nbsp;
          <Link to="/signup">Signup</Link>
        </>
      )}
      <hr />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
// component
