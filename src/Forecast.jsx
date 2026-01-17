import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay.jsx";

export default function Forecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState({});

  function findForecast(response) {
    console.log(response);
    setForecast({
      minimumTemp: Math.round(response.data.daily[0].temperature.minimum),
      maximumTemp: Math.round(response.data.daily[0].temperature.maximum),
      description: response.data.daily[0].condition.description,
      icon: response.data.daily[0].condition.icon,
      icon_url: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`,
    });
    setLoad("true");
  }
  function searchForecast() {
    let apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(findForecast);
  }

  if (load) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col text-center">
            <ForecastDay forecast={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
