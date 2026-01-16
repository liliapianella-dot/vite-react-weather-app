import React, { useState } from "react";

export default function WeatherCurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showCelsius() {}

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius")
    return (
      <div>
        <span className="temperature">{props.celsius}</span>{" "}
        <span className="unit">
          °C〡
          <a
            href="/"
            onClick={showFahrenheit}
            className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            °F
          </a>
        </span>
      </div>
    );
  else {
    return (
      <span>
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>{" "}
        <span className="unit">
          °F〡
          <a
            href="/"
            onClick={showCelsius}
            className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            °C{" "}
          </a>
        </span>
      </span>
    );
  }
}
