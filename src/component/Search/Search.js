import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="search col-4">
            <div className="right">
                <label htmlFor="search">Поиск: </label>
                <input type="text" id="search"/>
            </div>
        </div>
    )
};


export default Search;