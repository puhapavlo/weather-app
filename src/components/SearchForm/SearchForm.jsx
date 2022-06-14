import React, { useState } from 'react';
import Button from "../UI/Button/Button";
import styles from './SearchForm.module.scss';
import Input from "../UI/Input/Input";

const SearchForm = ({ submit, dataWeather, setSearch, search }) => {

    return (
        <div className={ styles.search }>
            <div className="container">
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." type="text"/>
                <Button onClick={submit}>Search</Button>
            </div>
        </div>
    );
};

export default SearchForm;