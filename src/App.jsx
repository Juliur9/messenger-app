import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Messenger from "./components/Messenger";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="routes">
          <Routes>
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Messenger />} /> //nur temporär
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
