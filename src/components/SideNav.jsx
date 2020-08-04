import React, { Component } from "react";

// Styles
import "../assets/stylesheets/dashboard.scss";
import openHamburger from "../assets/images/hamburger.svg";
import closeHamburger from "../assets/images/hamburger-2.svg";
import home from "../assets/images/home-icon.svg";
import envelope from "../assets/images/envelope-icon.svg";
import box from "../assets/images/box-icon.svg";
import file from "../assets/images/file-icon.svg";
import message from "../assets/images/comment-icon.svg";
import calendar from "../assets/images/calendar-icon.svg";
import user from "../assets/images/user-icon.svg";
import gear from "../assets/images/gear-icon.svg";

class SideNav extends Component {
  handleOpenNav = () => {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("logo-text").style.display = "block";
    document.getElementById("close-btn").style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
  };

  handleCloseNav = () => {
    document.getElementById("sideNav").style.width = "65px";
    document.getElementById("main").style.marginLeft = "65px";
    document.getElementById("open-btn").style.display = "block";
    document.getElementById("logo-text").style.display = "none";
    document.getElementById("close-btn").style.display = "none";
    document.body.style.backgroundColor = "#F1F3F9";
  };

  render() {
    return (
      <nav id="sideNav" className="sidenav shadow-sm pt-4">
        <div className="nav-link d-flex mb-4">
          <a
            id="open-btn"
            className="mb-3"
            href="#"
            onClick={this.handleOpenNav}
          >
            <img src={openHamburger} width="20" alt="Open hamburger" />
          </a>
          <h1 id="logo-text" className="font-weight-bold title">
            WEEZIE
          </h1>
          <a
            id="close-btn"
            className="closebtn"
            href="#"
            onClick={this.handleCloseNav}
          >
            <img src={closeHamburger} width="20" alt="Close hamburger" />
          </a>
        </div>
        <a className="nav-link d-flex text-dark mb-3 active" href="/dashboard">
          <img src={home} className="mr-4" width="20" alt="Home icon" />
          Home
        </a>
        <a className="nav-link d-flex text-dark mb-3" href="#">
          <img src={envelope} className="mr-4" width="20" alt="Inbox icon" />
          Inbox
        </a>
        <a className="nav-link d-flex text-dark mb-3" href="#">
          <img src={box} className="mr-4" width="20" alt="Inbox icon" />
          Products
        </a>
        <a className="nav-link d-flex text-dark mb-3" href="#">
          <img src={file} className="mr-4" width="20" alt="Invoices icon" />
          Invoices
        </a>
        <a className="nav-link d-flex text-dark mb-3" href="#">
          <img src={message} className="mr-4" width="20" alt="Messages icon" />
          Messages
        </a>
        <a className="nav-link d-flex text-dark mb-3" href="#">
          <img src={calendar} className="mr-4" width="20" alt="Calendar icon" />
          Calendar
        </a>
        <a className="nav-link d-flex text-dark mb-3" href="#">
          <img src={user} className="mr-4" width="20" alt="Customers icon" />
          Customers
        </a>
        <a className="nav-link d-flex text-dark mb-3" href="#">
          <img src={gear} className="mr-4" width="20" alt="Settings icon" />
          Settings
        </a>
      </nav>
    );
  }
}

export default SideNav;
