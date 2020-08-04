import React, { Component } from "react";

// Styles
import "../assets/stylesheets/dashboard.scss";

class Nav extends Component {
  render() {
    return (
      <section className="mt-3">
        <ul className="nav text-white">
          <li className="nav-item home">
            <h1 className="nav-link font-weight-bold title">Home</h1>
          </li>
          <li className="nav-item nav-text">
            <span className="nav-link">
              <i className="fa fa-home"></i>
            </span>
          </li>
          <li className="nav-item nav-text">
            <p className="nav-link">
              Home <span className="mx-3">-</span> Dashboard
            </p>
          </li>
          <li className="nav-item ml-auto">
            <h1 className="nav-link font-weight-bold title text-blue">
              WEEZIE
            </h1>
          </li>
        </ul>
      </section>
    );
  }
}

export default Nav;
