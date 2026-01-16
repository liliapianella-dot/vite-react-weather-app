import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York, NY, USA</h1>
      <ul>
        <li>Tuesday 07:00</li>
        <li>Clear with periodic clouds</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix ">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_clear_night_light.svg"
              className="float-start"
              alt="Clear with periodic clouds"
            />
            <span className="temperature float-start">-6</span>{" "}
            <span className="unit">°C〡°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
