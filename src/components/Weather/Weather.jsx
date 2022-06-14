import React from 'react';
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import FiveWeather from "../../pages/FiveWeather";

const Weather = ({ dataWeather, error }) => {
    if (dataWeather === undefined) {
        return null;
    }
    else {
        return (
            <p>
                <div className="container">
                    <div>Clouds: {dataWeather.weather[0].description}</div>
                    <div>Temp: {(dataWeather.main.temp - 273.15).toFixed(2)}</div>
                    <div>WindSpeed: {dataWeather.wind.speed}</div>
                    <Link to={`/five/${ dataWeather.name }`}>Weather to five</Link>
                </div>
            </p>
        );
    }
};

export default Weather;