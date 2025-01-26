import React from "react";
import axios from "axios";
import {Circles} from 'react-loader-spinner'


export default function Weather(props) {
  function handleResponse(response) {
    if (response.data && response.data.main) {
      alert(
        `The weather in ${response.data.name} is ${response.data.main.temp}°C`
      );
    } else {
      alert("Weather data not available");
    }
  }

  const apiKey = "3a94f3778290bfeee61278505dbbe51d";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios
    .get(apiUrl)
    .then(handleResponse)
    .catch((error) => {
      console.error("There was an error making the request:", error);
      alert("Failed to fetch weather data. Please try again.");
    });

    return(<Circles
    height="100"
    width="100"
    color="blue"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />)
}
