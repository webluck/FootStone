import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let a = 10;
  let b = 10;
  let c = a + b;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hello react-scripts {c}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
