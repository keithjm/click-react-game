import React from "react";
import "react-bootstrap";

import "./Navbar.css";
const Navbar = props => (
  <div>
    <nav className="navbar fixed-top">
      <div className="row">
        <div className="col-md-9 col-xl-9 col-lg-9">
          <ul>
            <li className="navbar-brand">
              <a href="/">Clicky Game</a>
            </li>
            <li className="navbar-text nav-item">{props.navbarMessage}</li>
          </ul>
        </div>

        <div className="col-md-3 col-xl-3 col-lg-3">
          <ul>
            <li className="navbar-text nav-item">
              Score: {props.score} | Top Score: {props.highScore}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
