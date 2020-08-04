import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

// Styles
import "../assets/stylesheets/login.scss";

class LoginForm extends Component {
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
              <p className="text-center mb-4">
                Welcome back! Please login to continue.
              </p>
              <form onSubmit={this.handleSubmit}>
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
                <div className="input-group shadow-sm mb-4">
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
                <div className="d-flex link mb-3">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input shadow-lg"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                  <div className="ml-auto">
                    <a href="#" className="text-dark">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-blue">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <p className="text-white mt-3 text-center link">
              New to Product? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
