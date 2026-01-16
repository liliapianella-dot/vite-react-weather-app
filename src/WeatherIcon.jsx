import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",

    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "partlycloudy",
    "scattered-clouds-day": "partlycloudy",
    "scattered-clouds-night": "partlycloudy",

    "broken-clouds-day": "partlycloudy",
    "broken-clouds-night": "partlycloudy",
    "shower-rain-day": "pouring",
    "shower-rain-night": "pouring",
    "rain-day": "rainy",
    "rain-night": "rainy",

    "thunderstorm-day": "lightning-rainy",
    "thunderstorm-night": "lightning-rainy",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "windy-variant",
    "mist-night": "windy-variant",
  };
  return (
    <WeatherSvg
      state={codeMapping[props.weatherDescription]}
      width={64}
      height={64}
    />
  );
}

// sunny;
// clear - night;
// partlycloudy;
// cloudy;
// fog;
// hail;
// rainy;
// snowy;
// snowy - rainy;
// pouring;
// lightning;
// lightning - rainy;
// windy;
// windy - variant;
// https://npm.io/package/weather-icons-animated
