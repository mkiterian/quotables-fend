import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(reduxThunk)),
);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="App">
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
