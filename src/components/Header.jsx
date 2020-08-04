import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

// Styles
import "../assets/stylesheets/dashboard.scss";
import portraitOne from "../assets/images/portrait.jpg";

class Header extends Component {
  render() {
    return (
      <header className="pt-3">
        <div className="container-fluid">
          <nav id="header" className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text bg-white border-0"
                        id="basic-addon1"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </li>
              </ul>
              <ul id="menu" className="navbar-nav ml-auto">
                <li className="nav-item mr-5 navbar-text">
                  <FontAwesomeIcon icon={faBell} className="text-white icon" />
                </li>
                <li className="nav-item mr-5 navbar-text">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="text-white icon"
                  />
                </li>
                <li className="nav-item mr-3">
                  <img
                    src={portraitOne}
                    className="rounded-circle"
                    height="50"
                    alt="Profile"
                  />
                </li>
                <li className="nav-item navbar-text">
                  <span className="text-white">Odinakachukwu Ezeobika</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
