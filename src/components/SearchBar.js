import React, { useState } from "react";
import './scss/SearchBar.scss';

function SearchBar() {

    const [search, setSearch] = useState("");
    

    return(
        <form className="form-search"  >
            <input type="text" id="search-bar" name="search" placeholder="Sticker de Joan Crawford"></input>
            <button className="button-search" type="submit">
                <i className="material-icons">search</i>
            </button>
        </form>
    );
}

export default SearchBar