import React, { Component } from "react";
import { connect } from "react-redux";

class Register extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
      </div>
    );
  }
}

export default connect()(Register);
