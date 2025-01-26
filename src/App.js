import React from "react";
import "./App.css"
import Weather from "./Weather";
import "./Weather.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      
    
      <Weather />
      <footer>
        <small>
          This project was coded by  MEMORY MUKONDA and is  {""}
          <a
            href="https://github.com/mukoe2020/REACT-WEATHER-APP.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code on GitHub
          </a>
        </small>
      </footer>
      </div>
    </div>
  );
}
