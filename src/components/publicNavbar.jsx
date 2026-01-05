import React, { Component } from 'react';


class publicNavbar extends Component {
    state = {  } 
    render() { 
        return (
            <>
        <nav className="flex h-24 w-full items-center justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 p-5">
        <h1 className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">MessengerApp</h1>
        <div className="flex gap-10">
          <a className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent" href="/register">
            Registrieren
          </a>
          <a className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent transition-all duration-300" href="/login">
            Login
          </a>
        </div>
      </nav>
      </>
        );
    }
}
 
export default publicNavbar;