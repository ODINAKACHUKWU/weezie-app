import React, { Component } from "react";

// Styles
import "../assets/stylesheets/dashboard.scss";
import chart from "../assets/images/chart.svg";
import blueCircle from "../assets/images/circle-blue-icon.svg";
import purpleCircle from "../assets/images/circle-purple-icon.svg";
import greenCircle from "../assets/images/circle-green-icon.svg";
import redCircle from "../assets/images/circle-red-icon.svg";
import yellowCircle from "../assets/images/circle-yellow-icon.svg";
import pieChart from "../assets/images/pie-chart.svg";

class Details extends Component {
  render() {
    return (
      <section className="mt-4">
        <div className="container-fluid">
          <div className="row px-3">
            <div className="col-md-6">
              <div className="card shadow-sm border-0 p-5 mb-3">
                <div className="row mb-5">
                  <div className="col-12">
                    <p className="text-muted">PARTNERS</p>
                    <p className="count-text">Affiliate Traffic</p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <img src={chart} alt="Bar Chart" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <p className="d-flex align-items-center mr-5">
                      <img
                        src={blueCircle}
                        width="20"
                        className="mr-2"
                        alt="Circle"
                      />
                      PH
                    </p>
                    <p className="d-flex align-items-center mr-5">
                      <img
                        src={purpleCircle}
                        width="20"
                        className="mr-2"
                        alt="Circle"
                      />
                      Abuja
                    </p>
                    <p className="d-flex align-items-center">
                      <img
                        src={greenCircle}
                        width="20"
                        className="mr-2"
                        alt="Circle"
                      />
                      Lagos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm border-0 p-5 mb-3">
                <div className="row mb-5">
                  <div className="col-6">
                    <p className="text-muted">OVERVIEW</p>
                    <p className="count-text">Budget</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className="btn report-btn shadow-sm">
                      Export Report
                    </button>
                  </div>
                </div>
                <div className="row d-flex align-items-center">
                  <div className="col-7">
                    <img src={pieChart} width="100%" alt="Pie Chart" />
                  </div>
                  <div className="col-5">
                    <div className="row mb-5">
                      <div className="col-6">
                        <p className="font-weight-bold">
                          <img
                            src={greenCircle}
                            width="20"
                            className="mr-2"
                            alt="Circle"
                          />
                          Lagos
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p>$122,900</p>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-6">
                        <p className="font-weight-bold">
                          <img
                            src={redCircle}
                            width="20"
                            className="mr-2"
                            alt="Circle"
                          />
                          Kaduna
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p>$96,785</p>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-6">
                        <p className="font-weight-bold">
                          <img
                            src={blueCircle}
                            width="20"
                            className="mr-2"
                            alt="Circle"
                          />
                          PH
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p>$35,785</p>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-6">
                        <p className="font-weight-bold">
                          <img
                            src={yellowCircle}
                            width="20"
                            className="mr-2"
                            alt="Circle"
                          />
                          Ibadan
                        </p>
                      </div>
                      <div className="col-6 d-flex">
                        <p>$96,785</p>
                      </div>
                    </div>
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

export default Details;
