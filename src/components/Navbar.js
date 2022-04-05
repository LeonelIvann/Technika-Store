import React from "react";
import './scss/Navbar.scss';

import SearchBar from './SearchBar';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function Navbar() {

    const [optionsActive, setOptionsActive] = React.useState(true);

    const toggleOptions = () => {
        setOptionsActive(!optionsActive);
        if (optionsActive) {
            document.getElementById("options").classList.remove("options-active-btn");
            document.getElementById("options").classList.remove("options-active-color");
            document.getElementById("options-li1").classList.add("options-pasive");
            document.getElementById("options-li2").classList.add("options-pasive");
            document.getElementById("options-li3").classList.add("options-pasive");
            document.getElementById("options-li4").classList.add("options-pasive");
        } else {
            document.getElementById("options").classList.add("options-active-btn");
            document.getElementById("options").classList.add("options-active-color");
            document.getElementById("options-li1").classList.remove("options-pasive");
            document.getElementById("options-li2").classList.remove("options-pasive");
            document.getElementById("options-li3").classList.remove("options-pasive");
            document.getElementById("options-li4").classList.remove("options-pasive");
        }
    }
    let menuMessage = "";

    if (optionsActive) {
        menuMessage = "Cerrar Menú";
    } else {
        menuMessage = "abrir menu";
    }


    return (
        <section className="section-header">
            <div className="logo">
                <Link to={"/"}>
                    <h4 className="logo-h4">TECHNIKA</h4>
                </Link>
            </div>
            <SearchBar />
            <div className="button-right-side">
                <CartWidget />
                    <button onClick={toggleOptions} className="material-icons menu-options">
                        <p id="pMenuPasive">{menuMessage}</p>
                        <span className="material-icons">menu</span>
                    </button>
            </div>
        </section>
    );
}

export default Navbar