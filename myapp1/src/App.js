import React from 'react';
import felix from './felix.svg';
import People from './components/People';
// import { names2 } from './data/names'
// import { names1, names2, pets } from './data/names'
import { pets } from './data/names'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={felix} className="felix-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <People names={pets} />
    </div>
  );
}

export default App;
