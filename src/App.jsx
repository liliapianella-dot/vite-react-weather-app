import { useState } from "react";
import Weather from "./Weather.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Forecast from "./Forecast.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Weather city="Berlin" />

          <footer>
            This project is created by{" "}
            <a
              href="https://www.liliapianella.com/"
              target="_blank"
              rel="noopener norferrer"
            >
              Lilia.
            </a>{" "}
            It is{" "}
            <a
              href="https://github.com/liliapianella-dot/vite-react-weather-app"
              target="_blank"
              rel="noopener norferrer"
            >
              open source on GitHub
            </a>{" "}
            and{" "}
            <a href="https://vite-react-weather-app-vert.vercel.app/">
              hosted on Vercel
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
