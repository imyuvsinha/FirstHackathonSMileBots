import React, { Component } from "react";
import Home from "../components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class HomeContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
        </Switch>
      </Router>
    );
  }
}
