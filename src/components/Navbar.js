import React from "react";
import './Navbar.scss';

function Header() {
    return (
        <section className="section-header">
            <div className="header-left-side">
                <div className="logo">
                    <h4 className="logo-h4">TECHNIKA</h4>
                </div>
            </div>
            <div className="header-right-side">
                <form className="form-search">
                    <input type="text" id="search-bar" name="search" placeholder="Stickers de los 80's"></input>
                    <button className="button-search" type="submit">SEARCH</button>
                </form>
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

export default Header