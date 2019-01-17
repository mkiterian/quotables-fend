import React, { Component } from "react";
import { connect } from "react-redux";

import requestRegister from "../../actions/authActions";

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

const mapStateToProps = state => {}

export default connect(mapStateToProps, { requestRegister })(Register);
