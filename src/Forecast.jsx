import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col text-center">
          <div className="day">Day</div>
          <div className="forecastIcon">image</div>
          <div className="temperatureMaxMin">
            <span className="temperatureMax p-1">
              <strong>10°C</strong>
            </span>
            <span className="temperatureMin opacity-50 p-1">7°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
