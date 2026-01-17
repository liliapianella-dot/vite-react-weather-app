import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  return (
    <div>
      <div className="day"> day </div>

      <div className="forecastIcon">
        {" "}
        <WeatherIcon
          weatherDescription={props.forecast.icon}
          size={50}
          className="weatherIcon"
        />
      </div>
      <div className="temperatureMaxMin">
        <span className="temperatureMax p-1">
          <strong>
            {props.forecast.maximumTemp}°
            <span className="unitExpressed">C</span>
          </strong>
        </span>
        <span className="temperatureMin opacity-50 p-1">
          {props.forecast.minimumTemp}°<span className="unitExpressed">C</span>
        </span>
        <div className="dayDescription"> {props.forecast.description} </div>
      </div>
    </div>
  );
}
