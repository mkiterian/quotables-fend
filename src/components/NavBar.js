import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from "../actions/authActions";

class NavBar extends Component {
  componentDidMount() {
    if(!this.props.auth.isAuthenticated){
      this.props.history.push("/login");
    };
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.auth.isAuthenticated){
      this.props.history.push("/login");
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link to="/">Home</Link>
          <Link to="/add">Add Quote</Link>
          <Link to="/view">View Quotes</Link>
          {this.props.auth.isAuthenticated ? (
            <button className="btn btn-primary" onClick={() => this.props.logout()}>Logout</button>
          ) : (
            <div>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logout })(withRouter(NavBar));
