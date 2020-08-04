import React, { Component } from "react";
import SignupForm from "../components/SignupForm";

// Styles
import "../assets/stylesheets/signup.scss";

class SignupPage extends Component {
  render() {
    return (
      <div className="background">
        <SignupForm />
      </div>
    );
  }
}

export default SignupPage;
