import React, { Component } from "react";
import firebase, { auth } from "firebase";
import StyledFirebaseAuth from "react-firebaseui/FirebaseAuth";

import "../components/Links/firebase";

class Login extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = (s) => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
      if (this.state.isSignedIn) {
        localStorage.setItem(
          "fullname",
          firebase.auth().currentUser.displayName
        );
        localStorage.setItem("images", firebase.auth().currentUser.photoURL);
        localStorage.setItem("isSignedIn", 1);
        // window.location.reload();
      } else {
        localStorage.setItem("isSignedIn", 0);
        // window.location.reload();
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <div className="sigin text-center">
              Wellcome :{" "}
              <span className="badge badge-success text-right">Online</span>
            </div>
            <br />
            <h4 class="text-center">
              {firebase.auth().currentUser.displayName}
            </h4>
            <br />
            <img
              alt="profire picture"
              src={firebase.auth().currentUser.photoURL}
              width="100px"
              className="rounded mx-auto d-block"
            />
            <br />

            <button
              class="btn btn-outline-danger btn-lg btn-block"
              onClick={() => firebase.auth().signOut()}
            >
              Sing out
            </button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Login;
