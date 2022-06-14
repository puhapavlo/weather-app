import React, { useState } from 'react';
import Loader from "../components/Loader/Loader";
import SearchForm from "../components/SearchForm/SearchForm";
import Weather from "../components/Weather/Weather";
import useFetch from "../hooks/useFetch";

const Home = () => {
    let {data, loading, error, fetchNow} = useFetch();
    const [search, setSearch] = useState('');

    function clickSearch() {
        fetchNow(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=51a4888dc613579c489179f9e9ed7185`);
    }

    console.log(data);
    return (
        <div>
            <Loader isLoading={loading}/>
            <SearchForm search={search} setSearch={setSearch} submit={clickSearch} dataWeather={data}/>
            <Weather dataWeather={data} error={error}/>
        </div>
    );
};

export default Home;