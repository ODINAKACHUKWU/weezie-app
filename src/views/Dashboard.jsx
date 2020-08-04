import React, { Component } from "react";
import SideNav from "../components/SideNav";
import Main from "../containers/Main";

// Styles
import "../assets/stylesheets/dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div id="main">
          <div className="dashboard-background">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
