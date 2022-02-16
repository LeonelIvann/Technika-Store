import React from "react";
import './Header.scss';

function Header() {
    return (
        <section className="section-header">
            <div className="header-left-side">
                <div className="logo">TECHNIKA</div>
            </div>
            <div className="header-right-side">
                <form className="form-search">
                    <input type="text" id="search-bar" name="search"></input>
                    <label for="search-bar" name="search" id="label-search"><span className="material-icons">search</span></label>
                </form>
                <div className="container-icon-cart">
                    <span class="material-icons">
                        shopping_cart
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Header