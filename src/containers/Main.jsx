import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Overview from "../components/Overview";
import Details from "../components/Details";
import Sales from "../components/Sales";
import Jobs from "../components/Jobs";

// Styles
import "../assets/stylesheets/dashboard.scss";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Nav />
        <Overview />
        <Details />
        <Sales />
        <Jobs />
      </Fragment>
    );
  }
}

export default Main;
