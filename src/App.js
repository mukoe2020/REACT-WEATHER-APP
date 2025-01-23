import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="harare" />
      </header>
    </div>
  );
}
