import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.forecast.temperature.maximum);
    return maxTemperature;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.forecast.temperature.minimum);
    return minTemperature;
  }

  function showDescription() {
    let description = props.forecast.condition.description;
    return description;
  }

  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="day"> {day()} </div>

      <div className="forecastIcon">
        {" "}
        <WeatherIcon
          weatherDescription={props.forecast.condition.icon}
          size={50}
          className="weatherIcon"
        />
      </div>
      <div className="temperatureMaxMin">
        <span className="temperatureMax p-1">
          <strong>
            {" "}
            {maxTemperature()}°<span className="unitExpressed">C</span>
          </strong>
        </span>
        <span className="temperatureMin opacity-50 p-1">
          {minTemperature()}°<span className="unitExpressed">C</span>
        </span>
        <div className="dayDescription"> {showDescription()} </div>
      </div>
    </div>
  );
}

//     {
//   minimumTemp: Math.round(response.data.daily[0].temperature.minimum),
//   maximumTemp: Math.round(response.data.daily[0].temperature.maximum),
//   description: response.data.daily[0].condition.description,
//   icon: response.data.daily[0].condition.icon,
//   icon_url: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`,
// })
