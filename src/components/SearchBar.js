import React from "react";
import './SearchBar.scss';

function SearchBar() {
    return(
        <form className="form-search">
            <input type="text" id="search-bar" name="search" placeholder="Stickers de los 80's"></input>
            <button className="button-search" type="submit">SEARCH</button>
        </form>
    );
}

export default SearchBar