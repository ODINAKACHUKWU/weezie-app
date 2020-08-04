import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

// Styles
import "../assets/stylesheets/signup.scss";

class SignupForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `${origin}/dashboard`;
  };

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow p-5 form">
              <h1 className="font-weight-bold text-center title">WEEZIE</h1>
              <p className="text-center mb-4">Hey there! Let's get started.</p>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group shadow-sm mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control border-0 p-0"
                    id="exampleInputName1"
                    placeholder="Name"
                  />
                </div>
                <div className="input-group shadow-sm mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control border-0 p-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username or email"
                  />
                </div>
                <div className="input-group shadow-sm mb-2">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control border-0 p-0"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-4">
                  <small>
                    Password Strength:{" "}
                    <span className="text-green font-italic">Strong</span>
                  </small>
                </div>
                <div className="form-group form-check link mb-5">
                  <input
                    type="checkbox"
                    className="form-check-input shadow-lg"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">
                    I agree with{" "}
                    <span className="text-blue">Privacy Policy</span>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-blue">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
            <p className="text-white mt-3 text-center link">
              Existing User? <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
