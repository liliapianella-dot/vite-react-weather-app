import React from "react";
import DateSentence from "./DateSentence.jsx";
import WeatherIcon from "./WeatherIcon.jsx";
import WeatherCurrentTemperature from "./WeatherCurrentTemperature.jsx";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.info.cityName}, {props.info.countryName}
      </h1>
      <ul>
        <li>
          <DateSentence time={props.info} />
        </li>
        <li> {props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div>
            <WeatherIcon weatherDescription={props.info.icon} />
            <WeatherCurrentTemperature celsius={props.info.temperature} />
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
