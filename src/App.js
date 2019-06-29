import React, { Component } from "react";
import withMUI from "./hoc/withMUI";
import withUser from "./hoc/withUser";
import { withFirebase } from "./firebase";
import withAuthentication from "./hoc/withAuthentication";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginContainer from "./containers/Login";
import Dummy from "./components/Dummy";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userData: []
    };
  }
  componentWillMount() {
    let userData = [];
    this.props.db.collection("users").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        if (doc.exists) {
          const users = doc.data();
          users.id = doc.id;
          userData.push(users);
        }
      });
      this.setState({ userData });
    });
  }

  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <Router>
              <Switch>
                <Route path={"/"} render={props => <Dummy {...props} />} />
              </Switch>
            </Router>
          </div>
        ) : (
          <div>
            <Router>
              <Route
                path={"/"}
                render={props => <LoginContainer {...props} />}
              />
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export default withMUI(withFirebase(withAuthentication(withUser(App))));
