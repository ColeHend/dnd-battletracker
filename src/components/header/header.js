import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  let noButtonStyle = { border: "none", background: "none" };
  return (
    <header className="App-header">
      <div>Header</div>
      <div>
        <ul className="navBar">
          <li>
            <Link to={"/"}>
              <button style={noButtonStyle}>Home</button>
            </Link>
          </li>
          <li>
            <Link to={"/tracker"}>
              <button style={noButtonStyle}>Tracker</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
