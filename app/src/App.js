import React, {useEffect} from "react";
import logo from './logo.svg';
import './App.css';

const getGreeting = async() => {
  return fetch("/api/greeting?name=test").then(data => data.json());
}

function App() {

  useEffect(() => {
    getGreeting().then(console.log)
  },[])
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
