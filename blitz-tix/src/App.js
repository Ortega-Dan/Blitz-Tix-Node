import React from 'react';

import './App.css';

import appRoutes from "./views/components/routes";
import appHome from "./views/pages/home";

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <appRoutes/> 
      </div>
    
  );
}


export default App;
