import React from 'react';
import {Link, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";

const FiveWeather = () => {
    const {city} = useParams();
    const {data, loading} = useFetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=51a4888dc613579c489179f9e9ed7185`);
    console.log(data);
    if( data !== undefined ) {
        return (
            <div>
                {data.list.map(item => (
                    <li key={item.dt}>
                        <div>Date: {item.dt_txt}</div>
                        <div>Clouds: {item.weather[0].description}</div>
                        <div>Temp: {(item.main.temp - 273.15).toFixed(2)}</div>
                        <div>WindSpeed: {item.wind.speed}</div>
                    </li>
                ))}
            </div>
        );
    }
};

export default FiveWeather;