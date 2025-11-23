import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Messenger from "./components/Messenger";
import Home from "./components/Home";
import Register from "./components/Register";
import Profile from "./components/Profile";
import UserList from "./components/Users";

import ProtectedRoute from "./components/ProtectedRoute";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="routes">
          <Routes>
            <Route path="/user" element={<UserList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />

            {/*Protected Routes*/}
            <Route
              path="/messenger"
              element={
                <ProtectedRoute>
                  <Messenger />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
