import React, { Component } from 'react';
import SignIn from './components/SignIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
          <SignIn />
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
