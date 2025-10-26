import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Hier kommt die Startseite hin</h1>
        <a href="/login">Login</a>
        <br/>
        <a href="/Register">Registrieren</a>
      </>
    );
  }
}

export default Home;
