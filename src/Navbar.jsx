import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar" className="border m-2 p-2 bg-info">
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
  );
}

export default Navbar;
