import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import Nav from './Components/Nav/Nav'
import PhoneNav from './Components/PhoneNav/PhoneNav'

class App extends Component {
  render() {
    return (
      <div className="App">   
      <Nav /> 
      <PhoneNav /> 
      {Routes}
      </div>
    );
  }
}

export default App;
