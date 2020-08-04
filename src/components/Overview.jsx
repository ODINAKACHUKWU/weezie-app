import React, { Component } from "react";

// Styles
import "../assets/stylesheets/dashboard.scss";
import arrowUp from "../assets/images/upward-icon.svg";
import arrowDown from "../assets/images/downward-icon.svg";
import dollarSign from "../assets/images/dollar-icon.svg";
import chartIcon from "../assets/images/chart-icon.svg";

class Overview extends Component {
  render() {
    return (
      <section className="mt-4">
        <div className="container-fluid">
          <div className="row px-3">
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-4 mb-3">
                <div className="row mb-4">
                  <div className="col-6">
                    <p className="text-muted">TOTAL TRAFFIC</p>
                    <p className="count-text">123,456</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <img src={arrowUp} width="50" alt="Traffic icon" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>
                      <span className="mr-2 text-green">+3.48%</span> Since last
                      month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-4 mb-3">
                <div className="row mb-4">
                  <div className="col-6">
                    <p className="text-muted">NEW USERS</p>
                    <p className="count-text">2,345</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <img src={arrowDown} width="50" alt="Traffic icon" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>
                      <span className="mr-2 text-red">+3.48%</span> Since last
                      month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-4 mb-3">
                <div className="row mb-4">
                  <div className="col-6">
                    <p className="text-muted">SALES</p>
                    <p className="count-text">924</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <img src={dollarSign} width="50" alt="Traffic icon" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>
                      <span className="mr-2 text-green">+3.48%</span> Since last
                      month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-4 mb-3">
                <div className="row mb-4">
                  <div className="col-6">
                    <p className="text-muted">PERFORMANCE</p>
                    <p className="count-text">48.65%</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <img src={chartIcon} width="50" alt="Traffic icon" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>
                      <span className="mr-2 text-green">+3.48%</span> Since last
                      month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Overview;
