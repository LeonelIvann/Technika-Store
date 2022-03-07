import React from "react";
import './Card.scss';

import exampleImg from '../images/4.jpg';
import ItemCount from "./ItemCount";

function Card() {

    const miOnAdd = () => {}
    
    return (
        <section className ="card product">
            <div className ="card-image">
                <img src={exampleImg} alt="" id="product-image"/>
            </div>
            <div className ="card-text">
                <h3 id="title">Poster Pyrokinesis</h3>
                <p>De Andrea Cerrato</p>
                <ItemCount initial={1} onAdd={miOnAdd} stock/>
            </div>
        </section>
    )
}

export default Card