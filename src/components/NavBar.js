import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link to="/">Home</Link>
          <Link to="/add">Add Quote</Link>
          <Link to="/view">View Quotes</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;