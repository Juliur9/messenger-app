import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Router>
      <div className='routes'>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        </div>
      </Router>
    );
  }
}
 
export default App;