import React from "react";
import './scss/SearchBar.scss';

function SearchBar() {

    return(
        <form className="form-search" /* onSubmit={handleChange} */>
            <input type="text" id="search-bar" name="search" placeholder="Stickers de los 80's"></input>
            <button className="button-search" type="submit">SEARCH</button>
        </form>
    );
}

export default SearchBar