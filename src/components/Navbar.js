import React from "react";
import './Navbar.scss';

import SearchBar from './SearchBar';

function Navbar() {
    return (
        <section className="section-header">
            <div className="header-left-side">
                <div className="logo">
                    <h4 className="logo-h4">TECHNIKA</h4>
                </div>
            </div>
            <div className="header-right-side">
                <SearchBar />
                <div className="container-icon-cart">
                    <form action="#!" className="button-right-side">
                        <button class="material-icons cart">shopping_cart</button>
                        <button class="material-icons expand">expand_more
                        <div className="options">
                            <li><a href="#!">ARTISTAS</a></li>
                            <li><a href="#!">MUSICA</a></li>
                            <li><a href="#!">RIPTIDE</a></li>
                        </div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Navbar