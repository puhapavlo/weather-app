import React, {useState} from 'react';
import Loader from './components/Loader/Loader';
import useFetch from './hooks/useFetch';
import SearchForm from './components/SearchForm/SearchForm';
import './App.scss';
import Weather from "./components/Weather/Weather";
import {Route, Routes} from "react-router-dom";
import FiveWeather from "./pages/FiveWeather";
import Home from "./pages/Home";

function App() {
    const data = useFetch('https://mretest.dev.drudesk.com/jsonapi/node/agent/');
    console.log(data);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/five/:city" element={<FiveWeather/>}/>
            </Routes>
        </div>
    );
}

export default App;
