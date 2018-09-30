import React, { Component } from 'react';
import Registration from './components/registration';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
        <Registration />
        </p>
      </div>
    );
  }
}

export default App;
