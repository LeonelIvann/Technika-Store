import React from "react";
import './scss/Navbar.scss';

import SearchBar from './SearchBar';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


function Navbar() {
    
    return (
        <section className="section-header">
                <div className="logo">
                    <Link to={"./"}>
                    <h4 className="logo-h4">TECHNIKA</h4>
                    </Link>
                </div>
                <SearchBar />
                    <form className="button-right-side">
                        <CartWidget />
                        <button type="submit" className="material-icons expand">expand_more
                        <div className="options">
                            <li>    <Link to={"categoria/artistas"}>ARTISTAS</Link>     </li>
                            <li>    <Link to={"categoria/musica"}>MUSICA</Link>         </li>
                            <li>    <Link to={"categoria/riptide"}>RIPTIDE</Link>       </li>
                        </div>
                        </button>   
                    </form>
        </section>
    );
}

export default Navbar