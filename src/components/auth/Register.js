import React, { Component } from "react";
import { connect } from "react-redux";

import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount(){
    this.props.history.push("/quotes");
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      ...this.state
    };
    this.props.registerUser(newUser);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-secondary">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
