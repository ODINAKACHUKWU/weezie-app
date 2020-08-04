import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

// Styles
import "../assets/stylesheets/login.scss";

class LoginPage extends Component {
  render() {
    return (
      <div className="background">
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
