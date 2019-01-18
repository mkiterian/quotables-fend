import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import QuotesList from "./components/QuotesList";
import AddQuote from "./components/AddQuote";
import "./App.css";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/view" component={QuotesList} />
              <Route exact path="/add" component={AddQuote} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
