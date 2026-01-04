import React, { Component } from "react";
import Snowfall from 'react-snowfall'

class Home extends Component {
  state = {};
  render() {
    return ( 
      <>
        <nav className="flex w-full h-24 items-center justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 p-5">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">MessengerApp</h1>
          <div className="flex gap-10">
            <a className="text-3xl font-bold bg-gradient-to-r from-green-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent" href="/register">
              Registrieren
            </a>
            <a className="text-3xl font-bold bg-gradient-to-r from-green-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent" href="/login">
              Login
            </a>
          </div>
        </nav>
        <div className="w-full h-screen bg-gradient-to-r from-green-300 via-violet-600 to-cyan-400"></div>
      </>
    );
  }
}

export default Home;
