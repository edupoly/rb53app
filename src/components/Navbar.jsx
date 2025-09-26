import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/customers/userSlice";

function Navbar() {
  var user = useSelector((state) => state.usrR.userDetails);
  var dispatch = useDispatch();
  var navigate = useNavigate();
  console.log(user);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            BookMyMovie
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              {user.role === "movie owner" && (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/addMovie">
                      Add Movie
                    </Link>
                  </li>
                </>
              )}

              {!user.token && (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              {user.token && (
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
