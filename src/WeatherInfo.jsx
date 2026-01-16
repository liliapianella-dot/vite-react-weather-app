import React from "react";
import DateSentence from "./DateSentence.jsx";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.info.cityName}, {props.info.countryName}
      </h1>
      <ul>
        <li>
          <DateSentence today={props.info} />
        </li>
        <li> {props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix ">
            <img
              src={props.info.icon_url}
              className="float-start"
              alt="Clear with periodic clouds"
            />
            <span className="temperature float-start">
              {props.info.temperature}
            </span>{" "}
            <span className="unit">°C〡°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.windSpeed} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
