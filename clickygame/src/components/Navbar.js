import React from "react";
import "./Navbar.css";
const Navbar = props => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top">
      <ul>
        <li className="navbar-brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="navbar-text nav-item mx-5">{props.navbarMessage}</li>
        <li className="navbar-text nav-item mx-5">
          Score: {props.score} | Top Score: {props.highScore}
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
