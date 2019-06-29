import React, { Component } from "react";
import Login from "../components/Login";
import withFirebase from "../hoc/withFirebase";
import withAuthentication from "../hoc/withAuthentication";
import withUser from "../hoc/withUser";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      const user = {
        userName: this.props.firebase.auth.currentUser.displayName,
        userId: this.props.firebase.auth.currentUser.uid,
        userImage: this.props.firebase.auth.currentUser.photoURL,
        userEmailId: this.props.firebase.auth.currentUser.email
      };

      //ADD USER
      this.props.db
        .collection("users")
        .doc(user.userId)
        .onSnapshot(querySnapshot => {
          if (querySnapshot.exists) {
            console.log("You are already registered");
            if (
              querySnapshot.data().userNotificationPlayerId === null &&
              window.cordova
            ) {
              this.props.db
                .collection("users")
                .doc(user.userId)
                .update({
                  userNotificationPlayerId: JSON.parse(
                    localStorage.getItem("playerId")
                  ).id
                });
            }
          } else {
            let playerId = null;
            if (window.cordova) {
              playerId = JSON.parse(localStorage.getItem("playerId")).id;
            }
            this.props.db
              .collection("users")
              .doc(user.userId)
              .set({
                uid: user.userId,
                displayName: user.userName,
                email: user.userEmailId,
                photoURL: user.userImage,
                userType: "Employee",
                userNotificationPlayerId: playerId
              })
              .then(function() {
                console.log("You have been successfully registered");
              })
              .catch(function(error) {
                console.error("Something went wrong ", error);
              });
          }
        });
    }
  }

  handleLoader = () => {
    localStorage.setItem("isLoading", true);
  };

  render() {
    return (
      <Login
        {...this.state}
        {...this.props}
        handleLoader={this.handleLoader}
        isLoading={this.state.isLoading}
        login={this.props.firebase.googleSignIn}
        logOut={this.props.logOut}
        anonymousLogin={this.props.signInAnonymously}
      />
    );
  }
}

export default withFirebase(withAuthentication(withUser(LoginContainer)));
