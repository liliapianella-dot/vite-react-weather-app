import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay.jsx";

export default function Forecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    setLoad(false);
  }, [props.city]);

  function findForecast(response) {
    setForecast(response.data.daily);
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
          {forecast.map(function (forecast, index) {
            if (index < 5) {
              return (
                <div className="col text-center py-2" key={index}>
                  <ForecastDay forecast={forecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}

/*As an alternative to the map:
           <div className="col text-center">
            <ForecastDay forecast={forecast[0]} />
          </div>
          <div className="col text-center">
            <ForecastDay forecast={forecast[1]} />
          </div>
          <div className="col text-center">
            <ForecastDay forecast={forecast[2]} />
          </div>
          <div className="col text-center">
            <ForecastDay forecast={forecast[3]} />
          </div>
          <div className="col text-center">
            <ForecastDay forecast={forecast[4]} />
          </div> */
