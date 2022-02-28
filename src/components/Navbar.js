import React from "react";
import './Navbar.scss';

import SearchBar from './SearchBar';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <section className="section-header">
                <div className="logo">
                    <h4 className="logo-h4">TECHNIKA</h4>
                </div>
                <SearchBar />
                    <form action="#!" className="button-right-side">
                        <CartWidget />
                        <button className="material-icons expand">expand_more
                        <div className="options">
                            <li><a href="#!">ARTISTAS</a></li>
                            <li><a href="#!">MUSICA</a></li>
                            <li><a href="#!">RIPTIDE</a></li>
                        </div>
                        </button>
                    </form>
        </section>
    );
}

export default Navbar