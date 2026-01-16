import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function handleResponse(response) {
    setweatherData({
      cityName: response.data.city,
      countryName: response.data.country,
      currentDate: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon_url: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
    });
    setReady(true);
  }
  let form = (
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
  );

  if (ready) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    const apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Weather">
        {form} <div>Loading details for {props.city}</div>
      </div>
    );
  }
}
