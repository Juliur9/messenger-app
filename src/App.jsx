import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Messenger from "./components/Messenger";
import Home from "./components/Home";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="routes">
          <Routes>
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} /> 
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
