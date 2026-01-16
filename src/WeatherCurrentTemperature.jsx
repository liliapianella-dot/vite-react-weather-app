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
          °C〡{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  else {
    return (
      <div>
        <span className="temperature">{(props.celsius * 9) / 5 + 32}</span>{" "}
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          〡 °F
        </span>
      </div>
    );
  }
}
