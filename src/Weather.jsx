import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function handleResponse(response) {
    console.log(response);
    setweatherData({
      cityName: response.data.city,
      countryName: response.data.country,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon_url: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
    });

    setReady(true);
  }

  if (ready) {
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
        <h1>
          {weatherData.cityName}, {weatherData.countryName}
        </h1>
        <ul>
          <li>Tuesday 07:00</li>
          <li> {weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix ">
              <img
                src={weatherData.icon_url}
                className="float-start"
                alt="Clear with periodic clouds"
              />
              <span className="temperature float-start">
                {weatherData.temperature}
              </span>{" "}
              <span className="unit">°C〡°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.windSpeed} km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
