import React, { Component } from "react";

// Styles
import "../assets/stylesheets/dashboard.scss";
import map from "../assets/images/map.svg";
import purpleBar from "../assets/images/purple-bar-icon.svg";
import greenBar from "../assets/images/green-bar-icon.svg";
import yellowBar from "../assets/images/yellow-bar-icon.svg";
import redBar from "../assets/images/red-lg-bar-icon.svg";
import orangeBar from "../assets/images/orange-lg-bar-icon.svg";
import cardImage from "../assets/images/card-image.jpg";

class Sales extends Component {
  render() {
    return (
      <section className="mt-4">
        <div className="container-fluid">
          <div className="row px-3">
            <div className="col-md-8">
              <div className="card shadow-sm border-0 mb-3">
                <div className="row px-5 pt-5 pb-3">
                  <div className="col-6">
                    <p className="count-text">Sales by Country</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className="btn report-btn shadow-sm">
                      View Full Report
                    </button>
                  </div>
                </div>
                <div className="dropdown-divider mt-4 mb-5"></div>
                <div className="row d-flex align-items-center px-5">
                  <div className="col-7">
                    <img src={map} className="mb-5" alt="Map" />
                    <div>
                      <button className="btn map-btn mr-1">+</button>
                      <button className="btn map-btn">-</button>
                    </div>
                  </div>
                  <div className="col-5 pr-5 pl-3">
                    <div className="card border-0 mb-5">
                      <div className="row mb-3">
                        <div className="col-6 font-weight-bold pl-0">
                          Russia
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                          $203,000
                        </div>
                      </div>
                      <div className="row">
                        <img src={purpleBar} width="100%" alt="" />
                      </div>
                    </div>
                    <div className="card border-0 mb-5">
                      <div className="row mb-3">
                        <div className="col-6 font-weight-bold pl-0">
                          Australia
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                          $203,000
                        </div>
                      </div>
                      <div className="row">
                        <img src={greenBar} width="100%" alt="" />
                      </div>
                    </div>
                    <div className="card border-0 mb-5">
                      <div className="row mb-3">
                        <div className="col-6 font-weight-bold pl-0">China</div>
                        <div className="col-6 d-flex justify-content-end">
                          $203,000
                        </div>
                      </div>
                      <div className="row">
                        <img src={yellowBar} width="100%" alt="" />
                      </div>
                    </div>
                    <div className="card border-0 mb-5">
                      <div className="row mb-3">
                        <div className="col-6 font-weight-bold pl-0">
                          Algeria
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                          $203,000
                        </div>
                      </div>
                      <div className="row">
                        <img src={redBar} width="100%" alt="" />
                      </div>
                    </div>
                    <div className="card border-0 mb-5">
                      <div className="row mb-3">
                        <div className="col-6 font-weight-bold pl-0">
                          United States
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                          $203,000
                        </div>
                      </div>
                      <div className="row">
                        <img src={orangeBar} width="100%" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0 mb-3">
                <img src={cardImage} className="card-img-top" alt="..." />
                <div className="card-body px-5">
                  <h5 className="card-title font-weight-bold">
                    Deep dive in the Lagos Techspace
                  </h5>
                  <p className="text-muted mb-4">
                    By John Snow on Apr 30th at 12:45 PM
                  </p>
                  <p className="card-text mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit voluptates a harum tenetur amet incidunt quam fugit
                    recusandae? Beatae nobis magnam doloribus iste laudantium
                    delectus neque asperiores commodi voluptas sit...
                  </p>
                  <a href="#" className="font-weight-bold text-purple">
                    View article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sales;
