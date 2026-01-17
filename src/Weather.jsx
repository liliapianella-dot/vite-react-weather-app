import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});
  const [citySearched, setCitySearched] = useState(props.city);

  function handleResponse(response) {
    setweatherData({
      cityName: response.data.city,
      countryName: response.data.country,
      currentDate: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      icon_url: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
    });
    setReady(true);
  }
  function search() {
    const apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${citySearched}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function storeCitySearched(event) {
    setCitySearched(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus
            onChange={storeCitySearched}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn button-search w-100"
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
    search();
    return (
      <div className="Weather">
        {form} <div className="pt-3">Loading details for {citySearched}</div>
      </div>
    );
  }
}
