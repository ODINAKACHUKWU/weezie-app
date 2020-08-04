import React, { Component } from "react";

// Styles
import "../assets/stylesheets/dashboard.scss";
import arrowUp from "../assets/images/arrow-up.svg";
import arrowDown from "../assets/images/arrow-down.svg";
import portrait from "../assets/images/portrait.jpg";
import portraitTwo from "../assets/images/portrait-2.jpg";
import portraitThree from "../assets/images/portrait-3.jpg";
import hamburgerThree from "../assets/images/hamburger-3.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import blueBar from "../assets/images/blue-bar-icon.svg";
import orangeHighBar from "../assets/images/orange-high-bar-icon.svg";
import greenFullBar from "../assets/images/green-full-bar-icon.svg";
import redBar from "../assets/images/red-bar-icon.svg";

class Jobs extends Component {
  render() {
    return (
      <section className="mt-4">
        <div className="container-fluid">
          <div className="row px-3">
            <div className="col-md-12">
              <div className="card shadow-sm border-0 mb-5">
                <div className="row px-5 pt-5 pb-4">
                  <div className="col-6">
                    <p className="count-text">Jobs Table</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button className="btn report-btn shadow-sm">
                      Export Data
                    </button>
                  </div>
                </div>
                <div className="row table-section">
                  <div className="col-12">
                    <table className="table table-borderless mb-4">
                      <thead className="bg-grey">
                        <tr className="text-muted">
                          <th scope="col" className="pl-5">
                            <div className="d-flex">
                              <span className="mr-4">PROJECT</span>
                              <nav>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowUp} width="12" alt="" />
                                </a>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowDown} width="12" alt="" />
                                </a>
                              </nav>
                            </div>
                          </th>
                          <th scope="col">CREATED AT</th>
                          <th scope="col">
                            <div className="d-flex">
                              <span className="mr-4">STATUS</span>
                              <nav>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowUp} width="12" alt="" />
                                </a>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowDown} width="12" alt="" />
                                </a>
                              </nav>
                            </div>
                          </th>
                          <th scope="col">
                            <div className="d-flex">
                              <span className="mr-4">BUDGET</span>
                              <nav>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowUp} width="12" alt="" />
                                </a>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowDown} width="12" alt="" />
                                </a>
                              </nav>
                            </div>
                          </th>
                          <th scope="col">TEAM</th>
                          <th scope="col">
                            <div className="d-flex">
                              <span className="mr-4">COMPLETION</span>
                              <nav>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowUp} width="12" alt="" />
                                </a>
                                <a href="#" className="nav-link filter">
                                  <img src={arrowDown} width="12" alt="" />
                                </a>
                              </nav>
                            </div>
                          </th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="pl-5">
                            <img
                              src={portrait}
                              className="rounded-circle"
                              height="50"
                              alt="Profile picture"
                            />
                            <span className="font-weight-bold ml-2">
                              Project X
                            </span>
                          </th>
                          <td>20/03/2020</td>
                          <td>
                            <span className="mr-2">
                              <svg height="14" width="14">
                                <circle cx="7" cy="7" r="7" fill="#F53C56" />
                              </svg>
                            </span>
                            Pending
                          </td>
                          <td>$2500</td>
                          <td className="team-wrapper">
                            <img
                              src={portrait}
                              className="rounded-circle img-1"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitThree}
                              className="rounded-circle img-2"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitTwo}
                              className="rounded-circle img-3"
                              height="30"
                              alt="Profile picture"
                            />
                          </td>

                          <td>
                            <div className="d-flex">
                              <span className="mr-5">20%</span>
                              <img
                                src={redBar}
                                width="150"
                                className="ml-5"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <a href="#">
                              <div className="options-icon d-flex align-items-center justify-content-center">
                                <img src={hamburgerThree} width="4" alt="" />
                              </div>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="pl-5">
                            <img
                              src={portrait}
                              className="rounded-circle"
                              height="50"
                              alt="Profile picture"
                            />
                            <span className="font-weight-bold ml-2">
                              Dashboard Enterprise
                            </span>
                          </th>
                          <td>20/03/2020</td>
                          <td>
                            <span className="mr-2">
                              <svg height="14" width="14">
                                <circle cx="7" cy="7" r="7" fill="#2DCE98" />
                              </svg>
                            </span>
                            Completed
                          </td>
                          <td>$4400</td>
                          <td className="team-wrapper">
                            <img
                              src={portrait}
                              className="rounded-circle img-1"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitThree}
                              className="rounded-circle img-2"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitTwo}
                              className="rounded-circle img-3"
                              height="30"
                              alt="Profile picture"
                            />
                          </td>

                          <td>
                            <div className="d-flex">
                              <span className="mr-5">100%</span>
                              <img
                                src={greenFullBar}
                                width="150"
                                className="ml-5"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <a href="#">
                              <div className="options-icon d-flex align-items-center justify-content-center">
                                <img src={hamburgerThree} width="4" alt="" />
                              </div>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="pl-5">
                            <img
                              src={portrait}
                              className="rounded-circle"
                              height="50"
                              alt="Profile picture"
                            />
                            <span className="font-weight-bold ml-2">
                              The Black Project
                            </span>
                          </th>
                          <td>20/03/2020</td>
                          <td>
                            <span className="mr-2">
                              <svg height="14" width="14">
                                <circle cx="7" cy="7" r="7" fill="#11CDEF" />
                              </svg>
                            </span>
                            On Schedule
                          </td>
                          <td>$2133</td>
                          <td className="team-wrapper">
                            <img
                              src={portrait}
                              className="rounded-circle img-1"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitThree}
                              className="rounded-circle img-2"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitTwo}
                              className="rounded-circle img-3"
                              height="30"
                              alt="Profile picture"
                            />
                          </td>

                          <td>
                            <div className="d-flex">
                              <span className="mr-5">90%</span>
                              <img
                                src={blueBar}
                                width="150"
                                className="ml-5"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <a href="#">
                              <div className="options-icon d-flex align-items-center justify-content-center">
                                <img src={hamburgerThree} width="4" alt="" />
                              </div>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="pl-5">
                            <img
                              src={portrait}
                              className="rounded-circle"
                              height="50"
                              alt="Profile picture"
                            />
                            <span className="font-weight-bold ml-2">
                              React Project
                            </span>
                          </th>
                          <td>20/03/2020</td>
                          <td>
                            <span className="mr-2">
                              <svg height="14" width="14">
                                <circle cx="7" cy="7" r="7" fill="#FB6340" />
                              </svg>
                            </span>
                            Delayed
                          </td>
                          <td>$4566</td>
                          <td className="team-wrapper">
                            <img
                              src={portrait}
                              className="rounded-circle img-1"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitThree}
                              className="rounded-circle img-2"
                              height="30"
                              alt="Profile picture"
                            />
                            <img
                              src={portraitTwo}
                              className="rounded-circle img-3"
                              height="30"
                              alt="Profile picture"
                            />
                          </td>

                          <td>
                            <div className="d-flex">
                              <span className="mr-5">72%</span>
                              <img
                                src={orangeHighBar}
                                width="150"
                                className="ml-5"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <a href="#">
                              <div className="options-icon d-flex align-items-center justify-content-center">
                                <img src={hamburgerThree} width="4" alt="" />
                              </div>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <nav className="px-5">
                  <ul className="pagination justify-content-end">
                    <li className="page-item mr-3">
                      <a
                        className="page-link rounded-circle text-purple"
                        href="#"
                        aria-label="Previous"
                      >
                        <img src={arrowLeft} width="12" alt="Arrow left" />
                      </a>
                    </li>
                    <li className="page-item mr-3">
                      <a
                        className="page-link rounded-circle text-purple active-page"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item mr-3">
                      <a
                        className="page-link rounded-circle text-purple"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item mr-3">
                      <a
                        className="page-link rounded-circle text-purple"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item mr-3">
                      <a
                        className="page-link rounded-circle text-purple"
                        href="#"
                      >
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle text-purple"
                        href="#"
                        aria-label="Next"
                      >
                        <img src={arrowRight} width="12" alt="Arrow right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Jobs;
