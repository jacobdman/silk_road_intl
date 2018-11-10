import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import Nav from './Components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">   
      <Nav /> 
      {Routes}     
      </div>
    );
  }
}

export default App;
