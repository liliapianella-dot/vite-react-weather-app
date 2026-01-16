import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <a className="btn btn-primary">button</a>
        <footer>
          This project is created by{" "}
          <a href="https://www.liliapianella.com/" target="_blank">
            Lilia
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/liliapianella-dot/vite-react-weather-app"
            target="_blank"
          >
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
