import React from "react";

import "./App.css";
import HomeContainer from "./containers/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={props => <HomeContainer {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
