import React, { Component } from "react";
import logo from "../images/ElectrovertLogo.jpeg";
import "./navBar.css";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="120"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                School
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Student
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
