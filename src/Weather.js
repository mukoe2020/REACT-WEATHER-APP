import React from "react";

export default function Weather() { 
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>

      <h1> Petoria </h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" />
          6°C | °F
        </div>
        <div className="col-6">
          <ul>
            <li>
              Precipitation: 15%
            </li>
            <li>
              Humidity: 72%
            </li>
            <li>
              Wind: 13 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


